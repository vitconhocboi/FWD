package com.viettelpost.service;

import com.viettelpost.entity.ActionAudit;
import com.viettelpost.entity.ActionDetail;
import com.viettelpost.entity.User;
import com.viettelpost.model.UserCustom;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.repositories.ActionAuditRepository;
import com.viettelpost.repositories.ActionDetailRepository;
import org.slf4j.Logger;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.GenericTypeResolver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.SerializationUtils;

import javax.persistence.*;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.*;

public class  BaseCustomService<Tbo> {
    public static final Logger LOGGER = org.slf4j.LoggerFactory.getLogger(BaseCustomService.class);
    @Autowired
    protected EntityManager entityManager;

    @Autowired
    private ActionAuditRepository actionAuditRepository;

    @Autowired
    private ActionDetailRepository actionDetailRepository;

    @Autowired
    protected JpaRepository<Tbo, Long> repository;

    public List<Tbo> getAll() throws Exception {
        LOGGER.debug(getClassName() + ": getAll !");
        return repository.findAll();
    }

    @Transactional
    public Tbo findById(Long id) {
        LOGGER.info(getClassName() + ": getById !");
        Tbo bo = repository.findOne(id);
        return bo;
    }

    @Transactional
    public Tbo save(Tbo bo) throws Exception {
        LOGGER.info(getClassName() + ": update !");
        Long id = null;
        for (Field field : bo.getClass().getDeclaredFields()) {
            field.setAccessible(true);
            if (field.getAnnotation(Id.class) != null) {
                id = (Long) field.get(bo);
            }
        }
        if (id != null) {
            Tbo oldObject = findById(id);
            if (oldObject != null) {
                Map<String, Object> map = clone(oldObject);
                repository.save(bo);
                insertLog("UPDATE", bo, map);
                return bo;
            }
        }
        repository.save(bo);
        insertLog("INSERT", bo, null);
        return bo;
    }

    @Transactional
    public void delete(Long id) throws Exception {
        LOGGER.info(getClassName() + ": deleteById !");
        Tbo bo = findById(id);
        repository.delete(id);
        insertLog("DELETE", bo, null);
    }

    public Long getSequenceByName(String sequenceName) {
        Query q = entityManager.createNativeQuery("SELECT " + sequenceName + ".NEXTVAL FROM DUAL");
        BigDecimal seq = (BigDecimal) q.getSingleResult();
        return seq != null ? seq.longValue() : null;
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
                        Object searchValue = AppHelper.covnertToOriginalType(field, value);
                        params.add(searchValue);
                    } else if (searchParams.get(param) instanceof Map) {
                        Map<String, Object> map = (Map<String, Object>) searchParams.get(param);

                        if (map.get("FROM") != null) {
                            sql.append("AND a." + param + " >=  :param_" + params.size() + " ");
                            Object searchValue = AppHelper.covnertToOriginalType(field, map.get("FROM"));
                            params.add(searchValue);
                        }

                        if (map.get("TO") != null) {
                            sql.append("AND a." + param + " <=  :param_" + params.size() + " ");
                            Object searchValue = AppHelper.covnertToOriginalType(field, map.get("TO"));
                            params.add(searchValue);
                        }

                        if (map.get("VALUE") != null && map.get("OPERATOR") != null) {
                            String operator = map.get("OPERATOR").toString();
                            Object searchValue;
                            if (map.get("VALUE") instanceof List) {
                                List<Object> arr = new ArrayList<>();
                                for (Object val : (List) map.get("VALUE")) {
                                    arr.add(AppHelper.covnertToOriginalType(field, val));
                                }
                                searchValue = arr;
                            } else {
                                searchValue = AppHelper.covnertToOriginalType(field, map.get("VALUE"));
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
                        Object searchValue = AppHelper.covnertToOriginalType(field, value);
                        params.add(searchValue);
                    } else if (searchParams.get(param) instanceof Map) {
                        Map<String, Object> map = (Map<String, Object>) searchParams.get(param);
                        if (map.get("FROM") != null) {
                            sql.append("AND a." + param + " >=  :param_" + params.size() + " ");
                            Object searchValue = AppHelper.covnertToOriginalType(field, map.get("FROM"));
                            params.add(searchValue);
                        }

                        if (map.get("TO") != null) {
                            Object searchValue = AppHelper.covnertToOriginalType(field, map.get("TO"));
                            if (searchValue instanceof Date) {
                                sql.append("AND a." + param + " <  :param_" + params.size() + " ");
                                Calendar cal = Calendar.getInstance();
                                cal.setTime((Date) searchValue);
                                cal.add(Calendar.DATE, 1);
                                searchValue = cal.getTime();
                            } else {
                                sql.append("AND a." + param + " <=  :param_" + params.size() + " ");
                            }
                            params.add(searchValue);
                        }

                        if (map.get("VALUE") != null && map.get("OPERATOR") != null) {
                            String operator = map.get("OPERATOR").toString();
                            Object searchValue;
                            if (map.get("VALUE") instanceof List) {
                                List<Object> arr = new ArrayList<>();
                                for (Object val : (List) map.get("VALUE")) {
                                    arr.add(AppHelper.covnertToOriginalType(field, val));
                                }
                                searchValue = arr;
                            } else {
                                searchValue = AppHelper.covnertToOriginalType(field, map.get("VALUE"));
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
                        Object searchValue = AppHelper.covnertToOriginalType(field, value);
                        params.add(searchValue);
                    } else if (searchParams.get(param) instanceof Map) {
                        Map<String, Object> map = (Map<String, Object>) searchParams.get(param);
                        if (map.get("VALUE") != null && map.get("OPERATOR") != null) {
                            String operator = map.get("OPERATOR").toString();
                            Object searchValue;
                            if (map.get("VALUE") instanceof List) {
                                List<Object> arr = new ArrayList<>();
                                for (Object val : (List) map.get("VALUE")) {
                                    arr.add(AppHelper.covnertToOriginalType(field, val));
                                }
                                searchValue = arr;
                            } else {
                                searchValue = AppHelper.covnertToOriginalType(field, map.get("VALUE"));
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

    public User getCurrentUserModel() {
        return ((UserCustom) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUserModel();
    }

    public boolean checkRole(String... roles) {
        List<String> lstRole = Arrays.asList(roles);
        for (GrantedAuthority grantedRole : SecurityContextHolder.getContext().getAuthentication().getAuthorities()) {
            if (lstRole.contains(grantedRole.getAuthority())) {
                return true;
            }
        }
        return false;
    }


    private void insertLog(String action, Tbo bo, Map<String, Object> map) {
        try {
            ActionAudit actionAudit = new ActionAudit();
            actionAudit.setAction(action);
            actionAudit.setActionDate(new Date());
            actionAudit.setTableName(bo.getClass().getAnnotation(Table.class).name());
            actionAudit.setUserId(getCurrentUserModel().getUserId());
            actionAuditRepository.save(actionAudit);
            if ("INSERT".equals(action)) {
                for (Field field : bo.getClass().getDeclaredFields()) {
                    field.setAccessible(true);
                    if (field.getAnnotationsByType(Column.class) != null && field.getAnnotationsByType(Column.class).length > 0) {
                        try {
                            ActionDetail actionDetail = new ActionDetail();
                            actionDetail.setActionAuditId(actionAudit.getId());
                            actionDetail.setColumnName(field.getAnnotationsByType(Column.class)[0].name());
                            actionDetail.setOldValue(null);
                            actionDetail.setNewValue(field.get(bo) == null ? null : field.get(bo).toString());
                            actionDetailRepository.save(actionDetail);
                        } catch (Exception e) {
                            LOGGER.error(e.getMessage(), e);
                        }
                    }
                }
            } else if ("DELETE".equals(action)) {
                for (Field field : bo.getClass().getDeclaredFields()) {
                    field.setAccessible(true);
                    if (field.getAnnotationsByType(Column.class) != null&&field.getAnnotationsByType(Column.class).length>0) {
                        try {
                            ActionDetail actionDetail = new ActionDetail();
                            actionDetail.setActionAuditId(actionAudit.getId());
                            actionDetail.setColumnName(field.getAnnotationsByType(Column.class)[0].name());
                            actionDetail.setNewValue(null);
                            actionDetail.setOldValue(field.get(bo).toString());
                            actionDetailRepository.save(actionDetail);
                        } catch (Exception e) {
                            LOGGER.error(e.getMessage(), e);
                        }
                    }
                }
            } else if ("UPDATE".equals(action)) {
                for (Field field : bo.getClass().getDeclaredFields()) {
                    field.setAccessible(true);
                    if (field.getAnnotationsByType(Column.class) != null&&field.getAnnotationsByType(Column.class).length>0
                            && ((field.getType().isPrimitive() && map.get(field.getName()) != field.get(bo))
                            || (field.get(bo) != null && map.get(field.getName()) == null)
                            || (field.get(bo) == null && map.get(field.getName()) != null)
                            || (map.get(field.getName()) != null && field.get(bo) != null && !map.get(field.getName()).equals(field.get(bo))))) {
                        try {
                            ActionDetail actionDetail = new ActionDetail();
                            actionDetail.setActionAuditId(actionAudit.getId());
                            actionDetail.setColumnName(field.getAnnotationsByType(Column.class)[0].name());
                            actionDetail.setNewValue(field.get(bo) == null ? null : field.get(bo).toString());
                            actionDetail.setOldValue(map.get(field.getName()) == null ? null : map.get(field.getName()).toString());
                            actionDetailRepository.save(actionDetail);
                        } catch (Exception e) {
                            LOGGER.error(e.getMessage(), e);
                        }
                    }
                }
            }
        } catch (Exception ex) {
            LOGGER.error(ex.getMessage(), ex);
        }
    }

    private Map<String, Object> clone(Tbo bo) {
        Map<String, Object> map = new HashMap<>();
        for (Field field : bo.getClass().getDeclaredFields()) {
            field.setAccessible(true);
            if (field.getAnnotationsByType(Column.class) != null&&field.getAnnotationsByType(Column.class).length>0) {
                try {
                    map.put(field.getName(), field.get(bo));
                } catch (Exception e) {
                    LOGGER.error(e.getMessage(), e);
                }
            }
        }
        return map;
    }
}
