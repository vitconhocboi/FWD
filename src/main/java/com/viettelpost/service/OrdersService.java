package com.viettelpost.service;

import com.viettelpost.entity.Orders;
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
    @Transactional
    public void delete(Long id) throws Exception {
        StringBuilder sql = new StringBuilder("update orders set status=-1 where order_id=:orderId");
        Query query = entityManager.createNativeQuery(sql.toString())
                .setParameter("orderId", id);
        query.executeUpdate();
    }

    @Override
    @Transactional
    public Orders save(Orders bo) throws Exception {
        super.save(bo);
        //cap nhat lai so luong
        StringBuilder sql = new StringBuilder();
        sql.append("UPDATE order_detail");
        sql.append("   SET quantity = :quantity,");
        sql.append("       amount_not_vat = quantity * price,");
        sql.append("       amount_vat = amount_not_vat * tax / 100,");
        sql.append("       amount_total = amount_not_vat + amount_vat");
        sql.append(" WHERE order_id = :orderId");

        Query query = entityManager.createNativeQuery(sql.toString())
                .setParameter("quantity", bo.getQuantity())
                .setParameter("orderId", bo.getOrderId());
        query.executeUpdate();
        return bo;
    }

    @Transactional
    public void calcOrderRevenue(Orders order) {
        StringBuilder sql = new StringBuilder();
        sql.append("UPDATE orders b");
        sql.append("   SET (b.amount_revenue,");
        sql.append("        b.amount_revenue_vat,");
        sql.append("        b.amount_revenue_total,");
        sql.append("        b.amount_fee,");
        sql.append("        b.amount_fee_vat,");
        sql.append("        b.amount_fee_total,");
        sql.append("        b.amount_profit,");
        sql.append("        b.amount_profit_vat,");
        sql.append("        b.amount_profit_total,");
        sql.append("        b.rate_profit,");
        sql.append("        b.amount_fund,");
        sql.append("        b.amount_sale,");
        sql.append("        b.amount_cs,");
        sql.append("        b.amount_op) =");
        sql.append("           (SELECT revenue_not_vat,");
        sql.append("                   revenue_vat,");
        sql.append("                   revenue_total,");
        sql.append("                   fee_not_vat,");
        sql.append("                   fee_vat,");
        sql.append("                   fee_total,");
        sql.append("                   revenue_not_vat - fee_not_vat profit_not_vat,");
        sql.append("                   revenue_vat - fee_vat profit_vat,");
        sql.append("                   revenue_total - fee_total profit_total,");
        sql.append("                   ROUND (");
        sql.append("                         (revenue_not_vat - fee_not_vat)");
        sql.append("                       / revenue_not_vat");
        sql.append("                       * 100,");
        sql.append("                       2)");
        sql.append("                       profit_rate,");
        sql.append("                   revenue_not_vat - fee_not_vat");
        sql.append("                   - ROUND (");
        sql.append("                         revenue_not_vat * :rate_contract_threshold / 100)");
        sql.append("                       fund,");
        sql.append("                   ROUND (");
        sql.append("                       (revenue_not_vat - fee_not_vat");
        sql.append("                        - ROUND (");
        sql.append("                                revenue_not_vat");
        sql.append("                              * :rate_contract_threshold");
        sql.append("                              / 100))");
        sql.append("                       * :rate_sale_threshold");
        sql.append("                       / 100)");
        sql.append("                       fund_sale,");
        sql.append("                   ROUND (");
        sql.append("                       (revenue_not_vat - fee_not_vat");
        sql.append("                        - ROUND (");
        sql.append("                                revenue_not_vat");
        sql.append("                              * :rate_contract_threshold");
        sql.append("                              / 100))");
        sql.append("                       * :rate_cs_threshold");
        sql.append("                       / 100)");
        sql.append("                       fund_cs,");
        sql.append("                   ROUND (");
        sql.append("                       (revenue_not_vat - fee_not_vat");
        sql.append("                        - ROUND (");
        sql.append("                                revenue_not_vat");
        sql.append("                              * :rate_contract_threshold");
        sql.append("                              / 100))");
        sql.append("                       * :rate_op_threshold");
        sql.append("                       / 100)");
        sql.append("                       fund_op");
        sql.append("              FROM (SELECT revenue_not_vat,");
        sql.append("                           revenue_vat,");
        sql.append("                           revenue_total,");
        sql.append("                           ROUND (rent_not_vat + revenue_not_vat * :payment_within / 100)");
        sql.append("                               fee_not_vat,");
        sql.append("                           ROUND (rent_vat + revenue_vat * :payment_within / 100) fee_vat,");
        sql.append("                           ROUND (rent_not_vat + revenue_not_vat * :payment_within / 100)");
        sql.append("                           + ROUND (rent_vat + revenue_vat * :payment_within / 100)");
        sql.append("                               fee_total");
        sql.append("                      FROM (SELECT SUM (");
        sql.append("                                       CASE");
        sql.append("                                           WHEN group_code = 'AMOUNT_REVENUE'");
        sql.append("                                           THEN");
        sql.append("                                               a.amount_not_vat");
        sql.append("                                           ELSE");
        sql.append("                                               0");
        sql.append("                                       END)");
        sql.append("                                       revenue_not_vat,");
        sql.append("                                   SUM (");
        sql.append("                                       CASE");
        sql.append("                                           WHEN group_code = 'AMOUNT_REVENUE'");
        sql.append("                                           THEN");
        sql.append("                                               a.amount_vat");
        sql.append("                                           ELSE");
        sql.append("                                               0");
        sql.append("                                       END)");
        sql.append("                                       revenue_vat,");
        sql.append("                                   SUM (");
        sql.append("                                       CASE");
        sql.append("                                           WHEN group_code = 'AMOUNT_REVENUE'");
        sql.append("                                           THEN");
        sql.append("                                               a.amount_total");
        sql.append("                                           ELSE");
        sql.append("                                               0");
        sql.append("                                       END)");
        sql.append("                                       revenue_total,");
        sql.append("                                   SUM (");
        sql.append("                                       CASE");
        sql.append("                                           WHEN group_code = 'AMOUNT_RENT'");
        sql.append("                                           THEN");
        sql.append("                                               a.amount_not_vat");
        sql.append("                                           ELSE");
        sql.append("                                               0");
        sql.append("                                       END)");
        sql.append("                                       rent_not_vat,");
        sql.append("                                   SUM (");
        sql.append("                                       CASE");
        sql.append("                                           WHEN group_code = 'AMOUNT_RENT'");
        sql.append("                                           THEN");
        sql.append("                                               a.amount_vat");
        sql.append("                                           ELSE");
        sql.append("                                               0");
        sql.append("                                       END)");
        sql.append("                                       rent_vat,");
        sql.append("                                   SUM (");
        sql.append("                                       CASE");
        sql.append("                                           WHEN group_code = 'AMOUNT_RENT'");
        sql.append("                                           THEN");
        sql.append("                                               a.amount_total");
        sql.append("                                           ELSE");
        sql.append("                                               0");
        sql.append("                                       END)");
        sql.append("                                       rent_total");
        sql.append("                              FROM order_detail a");
        sql.append("                             WHERE a.order_id = :order_id)))");
        sql.append(" WHERE order_id = :order_id");
        Query query = entityManager.createNativeQuery(sql.toString());
        query.setParameter("rate_contract_threshold", order.getRateContractThreshold());
        query.setParameter("rate_sale_threshold", order.getRateSaleThreshold());
        query.setParameter("rate_cs_threshold", order.getRateCsThreshold());
        query.setParameter("rate_op_threshold", order.getRateOpThreshold());
        query.setParameter("payment_within", order.getPaymentWithin());
        query.setParameter("order_id", order.getOrderId());
        query.executeUpdate();
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
    public int approve(Long orderId, String flow, Map<String, Object> attributes, String orderStatus) {

        StringBuilder sql = new StringBuilder();
        sql.append("UPDATE orders");
        sql.append("   SET ");
        for (String key : attributes.keySet()) {
            sql.append(" " + key + " = :" + key + ",");
        }
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
        sql.append("       AND status = :orderStatus");
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
        query.setParameter("orderStatus", orderStatus);
        query.setParameter("flow", flow);
        query.setParameter("userId", getCurrentUserModel().getUserId());
        for (String key : attributes.keySet()) {
            query.setParameter(key, attributes.get(key));
        }
        return query.executeUpdate();
    }

    public boolean checkPermissionApprove(Long orderId, List<String> flows) {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT 1 FROM  orders ");
        sql.append(" WHERE order_id = :orderId");
        sql.append("       AND status =");
        sql.append("               (SELECT current_status");
        sql.append("                  FROM flow_sign_detail");
        sql.append("                 WHERE     ROWNUM = 1");
        sql.append("                       AND current_status = status");
        sql.append("                       AND flow IN :flow");
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
        query.setParameter("flow", flows);
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

    public List<Orders> hasDebtByPartner(Long partnerId) {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT a ");
        sql.append("  FROM Orders a");
        sql.append(" WHERE status IN (4, 6, 7)");
        if (partnerId != null) {
            sql.append("       AND orderId IN (SELECT orderId ");
            sql.append("                          FROM OrderDetail ");
            sql.append("                         WHERE partnerId = :partnerId)");
        }

        Query query = entityManager.createQuery(sql.toString());
        if (partnerId != null) {
            query.setParameter("partnerId", partnerId);
        }
        return query.getResultList();
    }

    public String getCurrentStatus(Long orderId) {
        StringBuilder sql = new StringBuilder("SELECT status FROM orders WHERE order_id = :orderId");
        Query query = entityManager.createNativeQuery(sql.toString()).setParameter("orderId", orderId);
        return (String) query.getSingleResult();
    }
}
