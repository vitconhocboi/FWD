package com.viettelpost.service;

import com.viettelpost.model.Page;
import com.viettelpost.model.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
public class PageService extends BaseCustomService<Page> {
    public List<Page> getPagesByUsername(String username) {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT DISTINCT p.*");
        sql.append("  FROM users s,");
        sql.append("       user_role ur,");
        sql.append("       role_pages rp,");
        sql.append("       pages p");
        sql.append(" WHERE     s.user_name = :username");
        sql.append("       AND s.user_id = ur.user_id");
        sql.append("       AND ur.role_id = rp.role_id");
        sql.append("       AND p.page_id = rp.page_id");
        sql.append(" ORDER BY NVL (parent_id, -1), page_order");

        Query query = entityManager.createNativeQuery(sql.toString(), Page.class);
        query.setParameter("username", username);
        List<Page> pages = (List<Page>) query.getResultList();
        if (pages != null) {
            return pages;
        } else {
            return new ArrayList<>();
        }
    }
}
