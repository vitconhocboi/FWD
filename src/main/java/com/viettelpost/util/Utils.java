package com.viettelpost.util;

import java.lang.reflect.Field;
import java.math.BigInteger;
import java.text.DateFormat;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class Utils {
    public static Object covnertToOriginalType(Field field, Object value) throws Exception {
        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
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


    public static <T> T setObjectPropertyValue(Map<String, Object> map, Class<T> clazz) throws Exception {
        try {
            T object = clazz.newInstance();
            DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
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
                        }
                    }
                }
            }
            return object;

        } catch (InstantiationException | IllegalAccessException | ParseException ex) {
        }
        return null;
    }
}
