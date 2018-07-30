package com.viettelpost.util;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.id.enhanced.SequenceStyleGenerator;

import javax.persistence.Id;
import java.io.Serializable;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;

public class SequenceGeneratorIfNotExists extends SequenceStyleGenerator {
    @Override
    public Serializable generate(SessionImplementor session, Object object) throws HibernateException {
        Object id = null;
        try {
            for (Field field : object.getClass().getDeclaredFields()) {
                field.setAccessible(true);
                for (Annotation annot : field.getDeclaredAnnotations()) {
                    if (annot instanceof Id) {
                        id = field.get(object);
                    }
                }
            }
        } catch (IllegalAccessException e) {
            id = null;
        }
        if (id != null) {
            return (Serializable) id;
        } else {
            return super.generate(session, object);
        }
    }
}
