package com.viettelpost.service;

import com.viettelpost.entity.Role;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RoleService extends BaseCustomService<Role> {
    public List<String> getListRoleByUserName(String username) {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT role_name");
        sql.append("  FROM users u, role r, user_role ur");
        sql.append(" WHERE     u.user_name = :username");
        sql.append("       AND u.user_id = ur.user_id");
        sql.append("       AND r.role_id = ur.role_id");
        return entityManager.createNativeQuery(sql.toString()).setParameter("username", username).getResultList();
    }
}
