package com.viettelpost.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "PARTNER")
public class Partner {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "partner_seq"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "PARTNER_ID")
    private Long partnerId;

    @Column(name = "PARTNER_NAME")
    private String partnerName;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "TAX_CODE")
    private String taxCode;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "CONTACT_STAFF")
    private String contactStaff;

    @Column(name = "PHONE_CONTACT_STAFF")
    private String phoneContactStaff;

    @Column(name = "USER_CS")
    private Long userCs;

    @Column(name = "ESTABLISHMENT_DATE")
    private Date establishmentDate;

    @Column(name = "BUSINESS_TYPE")
    private String businessType;

    @Column(name = "JOURNEY")
    private String journey;

    @Column(name = "STATUS")
    private Long status;

    @Column(name = "CREATED_USER")
    private Long createdUser;

    @Column(name = "CREATED_DATE")
    private Date createdDate;

    @Column(name = "UPDATED_USER")
    private Long updatedUser;

    @Column(name = "UPDATED_DATE")
    private Date updatedDate;

    public Long getPartnerId() {
        return partnerId;
    }

    public void setPartnerId(Long partnerId) {
        this.partnerId = partnerId;
    }

    public String getPartnerName() {
        return partnerName;
    }

    public void setPartnerName(String partnerName) {
        this.partnerName = partnerName;
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

    public Long getUserCs() {
        return userCs;
    }

    public void setUserCs(Long userCs) {
        this.userCs = userCs;
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

    public String getJourney() {
        return journey;
    }

    public void setJourney(String journey) {
        this.journey = journey;
    }

    public Long getStatus() {
        return status;
    }

    public void setStatus(Long status) {
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
}
