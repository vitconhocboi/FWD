package com.viettelpost.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "USERS")
public class User implements Serializable {
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
    private Long userId;

    @Column(name = "ACTIVE")
    private Long active;

    @Column(name = "USER_NAME")
    private String userName;

    @Column(name = "FULL_NAME")
    private String fullName;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "DEPT_ID")
    private Long deptId;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "DATE_OF_BIRTH")
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "USER_TYPE")
    private Long userType;

    @Transient
    private String departmentName;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getActive() {
        return active;
    }

    public void setActive(Long active) {
        this.active = active;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getDeptId() {
        return deptId;
    }

    public void setDeptId(Long deptId) {
        this.deptId = deptId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getUserType() {
        return userType;
    }

    public void setUserType(Long userType) {
        this.userType = userType;
    }

    public String getOrderColumn() {
        return "userId";
    }
}
