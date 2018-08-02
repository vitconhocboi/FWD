package com.viettelpost.repository;

import com.viettelpost.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositpory extends JpaRepository<User, Long> {
    User findFirstByUserName(String username);
}
