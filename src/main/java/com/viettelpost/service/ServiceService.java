package com.viettelpost.service;

import com.viettelpost.model.Price;
import com.viettelpost.entity.Service;
import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.hibernate.type.DateType;
import org.hibernate.type.DoubleType;
import org.hibernate.type.LongType;
import org.hibernate.type.StringType;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@org.springframework.stereotype.Service
@Transactional
public class ServiceService extends BaseCustomService<Service> {
    public List<Price> searchPartnerByService(Long serviceId) {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT a.partner_id partnerId,");
        sql.append("       b.partner_name partnerName,");
        sql.append("       a.preis_charge price,");
        sql.append("       a.valid validTo,");
        sql.append("       a.currency currency");
        sql.append("  FROM route_detail a, partner b");
        sql.append(" WHERE a.partner_id = b.partner_id AND a.service_id = :serviceId ");
        sql.append(" UNION ALL ");
        sql.append("SELECT a.partner_id partnerId,");
        sql.append("       b.partner_name partnerName,");
        sql.append("       a.price price,");
        sql.append("       NULL validTo,");
        sql.append("       a.currency currency");
        sql.append("  FROM service_port a, partner b");
        sql.append(" WHERE a.partner_id = b.partner_id AND a.service_id = :serviceId");
        Query query = entityManager.createNativeQuery(sql.toString()).unwrap(SQLQuery.class)
                .addScalar("partnerId", LongType.INSTANCE)
                .addScalar("partnerName", StringType.INSTANCE)
                .addScalar("price", DoubleType.INSTANCE)
                .addScalar("validTo", DateType.INSTANCE)
                .addScalar("currency", StringType.INSTANCE)
                .setResultTransformer(Transformers.aliasToBean(Price.class));
        query.setParameter("serviceId", serviceId);
        return query.list();
    }
}
