/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.viettelpost.helper;

import com.viettelpost.controller.json.ResponseJson;
import com.viettelpost.entity.Page;
import com.viettelpost.model.RefundDebt;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.InputStream;
import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.math.BigInteger;
import java.net.URLDecoder;
import java.text.DateFormat;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @author PhongNguyen
 */
public class AppHelper {

    public static List<Page> getMenusForUser(List<Page> menuData) {
        List<Page> menusList = new ArrayList<>();
        for (Page page : menuData) {
            if (page.getParentId() == null) {
                menusList.add(page);
            } else {
                Page pageParent = getParentTab(menuData, page);
                if (pageParent != null) {
                    pageParent.getChildren().add(page);
                }
            }
        }
        return menusList;
    }

    private static Page getParentTab(List<Page> tabs, Page pageChild) {
        for (Page page : tabs) {
            if (page.getPageId().equals(pageChild.getParentId())) {
                return page;
            } else if (page.getChildren() != null && !page.getChildren().isEmpty()) {
                Page tmp = getParentTab(page.getChildren(), pageChild);
                if (tmp != null) {
                    return tmp;
                }
            }
        }
        return null;
    }

    public static ResponseEntity<Object> createResponseEntity(Object data, Number total, String message, boolean success,
                                                              HttpStatus httpStatus) {

        ResponseJson item = new ResponseJson();

        item.setData(data);

        item.setTotal(total);

        item.setMessage(message);

        item.setSuccess(success);

        return new ResponseEntity<>(item, httpStatus);
    }

    public static ResponseJson callRestTemplate(String uri, Object body, HttpMethod httpMethod, Map<String, Object> params) {

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(uri);
        if (params != null) {
            for (Map.Entry<String, Object> entry : params.entrySet()) {
                builder.queryParam(entry.getKey(), String.valueOf(entry.getValue()));
            }
        }
        uri = builder.build().encode().toString();
        List<HttpMessageConverter<?>> converters = new ArrayList<>();
        converters.add(new MappingJackson2HttpMessageConverter());
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.setMessageConverters(converters);
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<Object> entity = new HttpEntity<>(body, headers);
        ResponseEntity<ResponseJson> response = restTemplate.exchange(uri, httpMethod, entity, ResponseJson.class);

        ResponseJson responseJson = response.getBody();
        return response.getBody();
    }


    public static void convertFormDataToMap(Map<String, Object> object, Map formData) throws Exception {
        for (Object key : formData.keySet()) {
            String[] props = key.toString().split("\\.");
            Object value = formData.get(key);
            Map<String, Object> temp = object;
            for (int i = 0; i < props.length; i++) {
                if (i == props.length - 1 && value instanceof String[]) {
                    try {
                        temp.put(props[i], "undefined".equalsIgnoreCase(((String[]) value)[0]) ? null : URLDecoder.decode(((String[]) value)[0], "UTF-8"));
                    } catch (Exception ex) {
                        ex.printStackTrace();
                        throw ex;
                    }
                } else if (i == props.length - 1 && value instanceof InputStream) {
                    temp.put(props[i], value);
                } else if (temp.get(props[i]) == null) {
                    temp.put(props[i], new HashMap<>());
                    temp = (Map<String, Object>) temp.get(props[i]);
                } else {
                    temp = (Map<String, Object>) temp.get(props[i]);
                }
            }
        }
    }

    public static <T> T setObjectPropertyValue(Map<String, Object> map, Class<T> clazz) throws Exception {
        try {
            T object = clazz.newInstance();
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
            for (Field field : clazz.getDeclaredFields()) {
                field.setAccessible(true);
                Object value = map.get(field.getName());
                if (value != null && !value.toString().isEmpty()) {
                    if (field.getType().isInstance(value)) {
                        field.set(object, value);
                    } else {
                        if (field.getType() == Long.class) {
                            field.set(object, NumberFormat.getInstance().parse(value.toString()).longValue());
                        } else if (field.getType() == Double.class) {
                            field.set(object, NumberFormat.getInstance().parse(value.toString()).doubleValue());
                        } else if (field.getType() == String.class) {
                            field.set(object, value.toString());
                        } else if (field.getType() == Integer.class) {
                            field.set(object, NumberFormat.getInstance().parse(value.toString()).intValue());
                        } else if (field.getType() == BigInteger.class) {
                            field.set(object, NumberFormat.getInstance().parse(value.toString()).intValue());
                        } else if (field.getType() == Boolean.class) {
                            field.set(object, Boolean.valueOf(value.toString()));
                        } else if (field.getType() == byte[].class) {
                            field.set(object, value.toString().getBytes());
                        } else if (field.getType() == Short.class) {
                            field.set(object, Short.valueOf(value.toString()));
                        } else if (field.getType() == Float.class) {
                            field.set(object, NumberFormat.getInstance().parse(value.toString()).floatValue());
                        } else if (field.getType() == Date.class) {
                            if (value instanceof Long) {
                                field.set(object, new Date((Long) value));
                            } else {
                                Date date = dateFormat.parse(value.toString());
                                field.set(object, date);
                            }
                        } else if (field.getType().equals(List.class) && value instanceof List) {
                            field.set(object, value);
                        } else if (field.getType().equals(List.class) && value instanceof Map) {
                            Type t = ((ParameterizedType) field.getGenericType()).getActualTypeArguments()[0];
                            List lst = new ArrayList<>();
                            for (Object item : ((Map) value).values()) {
                                lst.add(setObjectPropertyValue((Map<String, Object>) item, (Class<T>) t));
                            }
                            field.set(object, lst);
                        }
                    }
                }
            }
            return object;

        } catch (InstantiationException | IllegalAccessException | ParseException ex) {
        }
        return null;
    }

    public static Object covnertToOriginalType(Field field, Object value) throws Exception {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
        if (value.getClass() == field.getType()) {
            return value;
        } else {
            if (field.getType() == Long.class) {
                return Long.valueOf(value.toString());
            } else if (field.getType() == Double.class) {
                return Double.valueOf(value.toString());
            } else if (field.getType() == String.class) {
                return value.toString();
            } else if (field.getType() == Integer.class) {
                return Integer.valueOf(value.toString());
            } else if (field.getType() == BigInteger.class) {
                return new BigInteger(value.toString());
            } else if (field.getType() == Boolean.class) {
                return Boolean.valueOf(value.toString());
            } else if (field.getType() == Byte.class) {
                return Byte.valueOf(value.toString());
            } else if (field.getType() == Short.class) {
                return Short.valueOf(value.toString());
            } else if (field.getType() == Float.class) {
                return Float.valueOf(value.toString());
            } else if (field.getType() == Date.class) {
                if (value instanceof Long) {
                    return new Date((Long) value);
                } else {
                    Date date = dateFormat.parse(value.toString());
                    return date;
                }
            } else {
                throw new Exception("");
            }

        }
    }


    public static void main(String[] args) throws Exception {
        Field field = RefundDebt.class.getDeclaredField("listRefund");

        Type type = field.getGenericType();
        System.out.println("type: " + type);
        if (type instanceof ParameterizedType) {
            ParameterizedType pt = (ParameterizedType) type;
            System.out.println("raw type: " + pt.getRawType());
            System.out.println("owner type: " + pt.getOwnerType());
            System.out.println("actual type args:");
            for (Type t : pt.getActualTypeArguments()) {
                System.out.println("    " + t);
            }
        }
    }
}
