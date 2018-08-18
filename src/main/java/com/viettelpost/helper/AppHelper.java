/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.viettelpost.helper;

import com.viettelpost.controller.json.ResponseJson;
import com.viettelpost.entity.Page;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

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
}
