package com.viettelpost.service;

import com.viettelpost.model.User;
import com.viettelpost.model.UserCustom;
import com.viettelpost.util.Utils;
import org.slf4j.Logger;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.GenericTypeResolver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class BaseCustomService<Tbo> {
    public static final Logger LOGGER = org.slf4j.LoggerFactory.getLogger(BaseCustomService.class);
    @Autowired
    protected EntityManager entityManager;

    @Autowired
    protected JpaRepository<Tbo, Long> repository;

    public List<Tbo> getAll() throws Exception {
        LOGGER.debug(getClassName() + ": getAll !");
        return repository.findAll();
    }

    public Tbo findById(Long id) {
        LOGGER.info(getClassName() + ": getById !");
        return repository.findOne(id);
    }

    @Transactional
    public Tbo save(Tbo bo) throws Exception {
        LOGGER.info(getClassName() + ": save !");
        return repository.save(bo);
    }

    @Transactional
    public void delete(Long id) throws Exception {
        LOGGER.info(getClassName() + ": deleteById !");
        repository.delete(id);
    }

    @Transactional
    public void deleteObject(Tbo object) throws Exception {
        LOGGER.debug(getClassName() + "'deleteByObject' !");
        repository.delete(object);
    }

    @Transactional
    public List<Tbo> saveList(List<Tbo> lst) throws Exception {
        LOGGER.debug(getClassName() + "'saveListObject' !");
        List<Tbo> result = new ArrayList<>();
        for (Tbo bo : lst) {
            repository.save(bo);
            result.add(bo);
        }
        return result;
    }

    public List<Tbo> search(Map<String, Object> searchParams) {
        StringBuilder sql = new StringBuilder("SELECT a FROM " + getClassName().getName() + " a WHERE 1=1 ");
        List params = new ArrayList();
        for (String param : searchParams.keySet()) {
            try {
                Field field = getClassName().getDeclaredField(param);
                Object value = searchParams.get(param);
                if (field.getType() != null && value != null && !("".equals(value.toString()))) {
                    if (BeanUtils.isSimpleProperty(value.getClass())) {
                        sql.append("AND a." + param + " =  :param_" + params.size() + " ");
                        Object searchValue = Utils.covnertToOriginalType(field, value);
                        params.add(searchValue);
                    } else if (searchParams.get(param) instanceof Map) {
                        Map<String, Object> map = (Map<String, Object>) searchParams.get(param);
                        if (map.get("VALUE") != null && map.get("OPERATOR") != null) {
                            String operator = map.get("OPERATOR").toString();
                            Object searchValue;
                            if (map.get("VALUE") instanceof List) {
                                List<Object> arr = new ArrayList<>();
                                for (Object val : (List) map.get("VALUE")) {
                                    arr.add(Utils.covnertToOriginalType(field, val));
                                }
                                searchValue = arr;
                            } else {
                                searchValue = Utils.covnertToOriginalType(field, map.get("VALUE"));
                            }
                            if (searchValue != null && !("".equals(searchValue))) {
                                sql.append("AND a." + param + " " + operator + " :param_" + params.size() + " ");
                                params.add(searchValue);
                            }
                        }
                    }
                }
            } catch (Exception ex) {
                LOGGER.warn(ex.toString());
            }
        }

        try {
            Method method = getClassName().getDeclaredMethod("getOrderColumn");
            if (method != null) {
                sql.append(" ORDER BY " + method.invoke(getClassName().newInstance()));
            }
        } catch (Exception e) {
            LOGGER.warn(getClassName().getName() + " not have order");
        }

        Query query = entityManager.createQuery(sql.toString());
        for (int i = 0; i < params.size(); i++) {
            query.setParameter("param_" + i, params.get(i));
        }
        return query.getResultList();
    }

    public List<Tbo> searchPaging(Map<String, Object> searchParams) {
        StringBuilder sql = new StringBuilder("SELECT a FROM " + getClassName().getName() + " a WHERE 1=1 ");
        List params = new ArrayList();

        int currentPage = (int) searchParams.get("currentPage");
        int pageSize = (int) searchParams.get("pageSize");

        for (String param : searchParams.keySet()) {
            try {
                Field field = getClassName().getDeclaredField(param);
                Object value = searchParams.get(param);
                if (field.getType() != null && value != null && !("".equals(value.toString()))) {
                    if (BeanUtils.isSimpleProperty(value.getClass())) {
                        sql.append("AND a." + param + " =  :param_" + params.size() + " ");
                        Object searchValue = Utils.covnertToOriginalType(field, value);
                        params.add(searchValue);
                    } else if (searchParams.get(param) instanceof Map) {
                        Map<String, Object> map = (Map<String, Object>) searchParams.get(param);
                        if (map.get("VALUE") != null && map.get("OPERATOR") != null) {
                            String operator = map.get("OPERATOR").toString();
                            Object searchValue;
                            if (map.get("VALUE") instanceof List) {
                                List<Object> arr = new ArrayList<>();
                                for (Object val : (List) map.get("VALUE")) {
                                    arr.add(Utils.covnertToOriginalType(field, val));
                                }
                                searchValue = arr;
                            } else {
                                searchValue = Utils.covnertToOriginalType(field, map.get("VALUE"));
                            }
                            if (searchValue != null && !("".equals(searchValue))) {
                                sql.append("AND a." + param + " " + operator + " :param_" + params.size() + " ");
                                params.add(searchValue);
                            }
                        }
                    }
                }
            } catch (Exception ex) {
                LOGGER.warn(ex.toString());
            }
        }

        try {
            Method method = getClassName().getDeclaredMethod("getOrderColumn");
            if (method != null) {
                sql.append(" ORDER BY " + method.invoke(getClassName().newInstance()));
            }
        } catch (Exception e) {
            LOGGER.warn(getClassName().getName() + " not have order");
        }

        Query query = entityManager.createQuery(sql.toString());
        for (int i = 0; i < params.size(); i++) {
            query.setParameter("param_" + i, params.get(i));
        }
        return query.setFirstResult((currentPage - 1) * pageSize).setMaxResults(pageSize).getResultList();
    }

    public Long getTotalRecord(Map<String, Object> searchParams) {
        StringBuilder sql = new StringBuilder("SELECT count(a) FROM " + getClassName().getName() + " a WHERE 1=1 ");
        List params = new ArrayList();

        for (String param : searchParams.keySet()) {
            try {
                Field field = getClassName().getDeclaredField(param);
                Object value = searchParams.get(param);
                if (field.getType() != null && value != null && !("".equals(value.toString()))) {
                    if (BeanUtils.isSimpleProperty(value.getClass())) {
                        sql.append("AND a." + param + " =  :param_" + params.size() + " ");
                        Object searchValue = Utils.covnertToOriginalType(field, value);
                        params.add(searchValue);
                    } else if (searchParams.get(param) instanceof Map) {
                        Map<String, Object> map = (Map<String, Object>) searchParams.get(param);
                        if (map.get("VALUE") != null && map.get("OPERATOR") != null) {
                            String operator = map.get("OPERATOR").toString();
                            Object searchValue;
                            if (map.get("VALUE") instanceof List) {
                                List<Object> arr = new ArrayList<>();
                                for (Object val : (List) map.get("VALUE")) {
                                    arr.add(Utils.covnertToOriginalType(field, val));
                                }
                                searchValue = arr;
                            } else {
                                searchValue = Utils.covnertToOriginalType(field, map.get("VALUE"));
                            }
                            if (searchValue != null && !("".equals(searchValue))) {
                                sql.append("AND a." + param + " " + operator + " :param_" + params.size() + " ");
                                params.add(searchValue);
                            }
                        }
                    }
                }
            } catch (Exception ex) {
                LOGGER.warn(ex.toString());
            }
        }

        Query query = entityManager.createQuery(sql.toString());
        for (int i = 0; i < params.size(); i++) {
            query.setParameter("param_" + i, params.get(i));
        }
        return (Long) query.getSingleResult();
    }

    private Class getClassName() {
        Class<Tbo> genericType = (Class<Tbo>) GenericTypeResolver.resolveTypeArgument(getClass(), BaseCustomService.class);
        return genericType;
    }

    protected User getCurrentUserModel() {
        return ((UserCustom) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUserModel();
    }
}
