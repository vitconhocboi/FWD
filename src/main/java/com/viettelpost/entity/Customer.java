package com.viettelpost.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "CUSTOMER")
public class Customer {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "customer_seq"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "customer_id")
    Long customerId;
    @Column(name = "customer_name")
    String customerName;
    @Column(name = "address")
    String address;
    @Column(name = "tax_code")
    String taxCode;
    @Column(name = "phone")
    String phone;
    @Column(name = "contact_staff")
    String contactStaff;
    @Column(name = "phone_contact_staff")
    String phoneContactStaff;
    @Column(name = "user_sale_id")
    Long userSaleId;
    @Column(name = "establishment_date")
    Date establishmentDate;
    @Column(name = "business_type")
    String businessType;
    @Column(name = "merchandize")
    String merchandize;
    @Column(name = "journey")
    String journey;
    @Column(name = "status")
    String status;
    @Column(name = "created_user")
    Long createdUser;
    @Column(name = "created_date")
    Date createdDate;
    @Column(name = "updated_user")
    Long updatedUser;
    @Column(name = "updated_date")
    Date updatedDate;

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTaxCode() {
        return taxCode;
    }

    public void setTaxCode(String taxCode) {
        this.taxCode = taxCode;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getContactStaff() {
        return contactStaff;
    }

    public void setContactStaff(String contactStaff) {
        this.contactStaff = contactStaff;
    }

    public String getPhoneContactStaff() {
        return phoneContactStaff;
    }

    public void setPhoneContactStaff(String phoneContactStaff) {
        this.phoneContactStaff = phoneContactStaff;
    }

    public Long getUserSaleId() {
        return userSaleId;
    }

    public void setUserSaleId(Long userSaleId) {
        this.userSaleId = userSaleId;
    }

    public Date getEstablishmentDate() {
        return establishmentDate;
    }

    public void setEstablishmentDate(Date establishmentDate) {
        this.establishmentDate = establishmentDate;
    }

    public String getBusinessType() {
        return businessType;
    }

    public void setBusinessType(String businessType) {
        this.businessType = businessType;
    }

    public String getMerchandize() {
        return merchandize;
    }

    public void setMerchandize(String merchandize) {
        this.merchandize = merchandize;
    }

    public String getJourney() {
        return journey;
    }

    public void setJourney(String journey) {
        this.journey = journey;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getCreatedUser() {
        return createdUser;
    }

    public void setCreatedUser(Long createdUser) {
        this.createdUser = createdUser;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Long getUpdatedUser() {
        return updatedUser;
    }

    public void setUpdatedUser(Long updatedUser) {
        this.updatedUser = updatedUser;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getOrderColumn() {
        return "customerId";
    }
}
