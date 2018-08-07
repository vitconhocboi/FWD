package com.viettelpost.service;

import com.viettelpost.model.User;
import com.viettelpost.repositories.UserRepositpory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

@Service
@Transactional
public class UserService extends BaseCustomService<User> {
    @Autowired
    UserRepositpory userRepositpory;

    @Autowired
    protected EntityManager entityManager;

    private static final String BCRYP_TYPE = "$";

    private static final PasswordEncoder BCRYPT = new BCryptPasswordEncoder();


    public User findByUsername(String username) {
        return userRepositpory.findFirstByUserName(username);
    }

    @Override
    public User save(User bo) throws Exception {
        if (!bo.getPassword().startsWith(BCRYP_TYPE)) {
            bo.setPassword(BCRYPT.encode(bo.getPassword()));
        }
        return super.save(bo);
    }
}
