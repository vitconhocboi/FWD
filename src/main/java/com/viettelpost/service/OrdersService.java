package com.viettelpost.service;

import com.viettelpost.constant.AppConstant;
import com.viettelpost.model.Orders;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Query;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OrdersService extends BaseCustomService<Orders> {
    @Override
    public List<Orders> searchPaging(Map<String, Object> searchParams) {
        if (checkRole("ROLE_ADMIN")) {

        } else if (checkRole("ROLE_SALE")) {
            searchParams.put("userSaleId", getCurrentUserModel().getUserId());
        } else {
            Map<String, Object> val = new HashMap<>();
            val.put("OPERATOR", "IN");
            val.put("VALUE", getListValidStatus());
            searchParams.put("status", val);
        }
        return super.searchPaging(searchParams);
    }

    @Override
    public Long getTotalRecord(Map<String, Object> searchParams) {
        if (checkRole("ROLE_ADMIN")) {

        } else if (checkRole("ROLE_SALE")) {
            searchParams.put("userSaleId", getCurrentUserModel().getUserId());
        } else {
            Map<String, Object> val = new HashMap<>();
            val.put("OPERATOR", "IN");
            val.put("VALUE", getListValidStatus());
            searchParams.put("status", val);
        }
        return super.getTotalRecord(searchParams);
    }

    @Transactional
    public int approve(Long orderId, String flow) {

        StringBuilder sql = new StringBuilder();
        sql.append("UPDATE orders");
        sql.append("   SET ");
        sql.append("       user_cs_id = case when status = 1 then :userId else user_cs_id end ,");
        sql.append("       user_op_id = case when status = 2 then :userId else user_op_id end ,");
        sql.append("       status =");
        sql.append("           (SELECT next_status");
        sql.append("              FROM flow_sign_detail");
        sql.append("             WHERE     ROWNUM = 1");
        sql.append("                   AND current_status = status");
        sql.append("                   AND flow = :flow");
        sql.append("                   AND (user_id = :userId OR user_id IS NULL)");
        sql.append("                   AND (1=0 ");
        for (GrantedAuthority role : SecurityContextHolder.getContext().getAuthentication().getAuthorities()) {
            sql.append("                        OR REGEXP_LIKE (role, '^" + role.getAuthority() + ",|," + role.getAuthority() + ",')");
        }

        sql.append("				   ))");
        sql.append(" WHERE order_id = :orderId");
        sql.append("       AND status =");
        sql.append("               (SELECT current_status");
        sql.append("                  FROM flow_sign_detail");
        sql.append("                 WHERE     ROWNUM = 1");
        sql.append("                       AND current_status = status");
        sql.append("                       AND flow = :flow");
        sql.append("                       AND (user_id = :userId OR user_id IS NULL)");
        sql.append("                   AND (1=0 ");
        for (GrantedAuthority role : SecurityContextHolder.getContext().getAuthentication().getAuthorities()) {
            sql.append("                        OR REGEXP_LIKE (role, '^" + role.getAuthority() + ",|," + role.getAuthority() + ",')");
        }
        sql.append("				   ))");
        if (!checkRole("ROLE_AMDIN") && checkRole("ROLE_SALE")) {
            sql.append("       AND user_sale_id  = :userId");
        }
        if (!checkRole("ROLE_AMDIN") && checkRole("ROLE_CS")) {
            sql.append("       AND (user_cs_id  = :userId OR user_cs_id is null)");
        }
        if (!checkRole("ROLE_AMDIN") && checkRole("ROLE_OP")) {
            sql.append("       AND (user_op_id  = :userId OR user_op_id is null)");
        }

        Query query = entityManager.createNativeQuery(sql.toString());
        query.setParameter("orderId", orderId);
        query.setParameter("flow", flow);
        query.setParameter("userId", getCurrentUserModel().getUserId());
        return query.executeUpdate();
    }

    public boolean checkPermissionApprove(Long orderId, String flow) {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT 1 FROM  orders ");
        sql.append(" WHERE order_id = :orderId");
        sql.append("       AND status =");
        sql.append("               (SELECT current_status");
        sql.append("                  FROM flow_sign_detail");
        sql.append("                 WHERE     ROWNUM = 1");
        sql.append("                       AND current_status = status");
        sql.append("                       AND flow = :flow");
        sql.append("                       AND (user_id = :userId OR user_id IS NULL)");
        sql.append("                   AND (1=0 ");
        for (GrantedAuthority role : SecurityContextHolder.getContext().getAuthentication().getAuthorities()) {
            sql.append("                        OR REGEXP_LIKE (role, '^" + role.getAuthority() + ",|," + role.getAuthority() + ",')");
        }
        sql.append("				   ))");
        if (!checkRole("ROLE_AMDIN") && checkRole("ROLE_SALE")) {
            sql.append("       AND user_sale_id  = :userId");
        }
        if (!checkRole("ROLE_AMDIN") && checkRole("ROLE_CS")) {
            sql.append("       AND (user_cs_id  = :userId OR user_cs_id is null)");
        }
        if (!checkRole("ROLE_AMDIN") && checkRole("ROLE_OP")) {
            sql.append("       AND (user_op_id  = :userId OR user_op_id is null)");
        }
        Query query = entityManager.createNativeQuery(sql.toString());
        query.setParameter("orderId", orderId);
        query.setParameter("flow", flow);
        query.setParameter("userId", getCurrentUserModel().getUserId());
        return !query.getResultList().isEmpty();
    }

    public List<String> getListValidStatus() {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT current_status");
        sql.append("  FROM flow_sign_detail");
        sql.append(" WHERE     (user_id = :userId OR user_id IS NULL)");
        sql.append("       AND (1 = 0 ");
        for (GrantedAuthority role : SecurityContextHolder.getContext().getAuthentication().getAuthorities()) {
            sql.append("                        OR REGEXP_LIKE (role, '^" + role.getAuthority() + ",|," + role.getAuthority() + ",')");
        }
        sql.append("				   )");
        Query query = entityManager.createNativeQuery(sql.toString());
        query.setParameter("userId", getCurrentUserModel().getUserId());
        List<String> lst = query.getResultList();
        lst.add("-1");
        return lst;
    }
}
