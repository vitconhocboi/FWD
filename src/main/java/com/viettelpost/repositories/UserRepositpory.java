package com.viettelpost.repositories;

import com.viettelpost.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositpory extends JpaRepository<User, Long> {
    User findFirstByUserName(String username);
}
