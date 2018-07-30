package com.viettelpost.service;

import com.viettelpost.model.User;
import com.viettelpost.repository.UserRepositpory;
import org.springframework.beans.factory.annotation.Autowired;
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


    public User findByUsername(String username) {
        return userRepositpory.findFirstByUsername(username);
    }
}
