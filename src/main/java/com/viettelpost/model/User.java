package com.viettelpost.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "USERS")
public class User {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "user_seq"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "USER_ID")
    Long userId;
    @Column(name = "USER_NAME")
    String username;
    @Column(name = "PASSWORD")
    String password;
    @Column(name = "FULL_NAME")
    String fullName;
    @Column(name = "ACTIVE")
    Long active;
    @Column(name = "DEPT_ID")
    Long deptId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Long getActive() {
        return active;
    }

    public void setActive(Long active) {
        this.active = active;
    }

    public Long getDeptId() {
        return deptId;
    }

    public void setDeptId(Long deptId) {
        this.deptId = deptId;
    }

    public String getOrderColumn() {
        return "userId";
    }
}