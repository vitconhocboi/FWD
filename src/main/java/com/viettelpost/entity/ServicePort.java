package com.viettelpost.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "SERVICE_PORT")
public class ServicePort {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "service_port_seq"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "ID")
    private Long id;

    @Column(name = "SERVICE_ID")
    private Long serviceId;

    @Column(name = "PORT_ID")
    private Long portId;

    @Column(name = "PARTNER_ID")
    private Long partnerId;

    @Column(name = "PARTNER_NAME")
    private String partnerName;

    @Column(name = "PRICE")
    private Long price;

    @Column(name = "CURRENCY")
    private String currency;

    @Column(name = "USER_CREATE_ID")
    private Long userCreateId;

    @Column(name = "CREATED_DATE")
    private Date createdDate;

    @Column(name = "USER_UPDATE_ID")
    private Long userUpdateId;

    @Column(name = "UPDATED_DATE")
    private Date updatedDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

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

    public Long getPortId() {
        return portId;
    }

    public void setPortId(Long portId) {
        this.portId = portId;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Long getUserCreateId() {
        return userCreateId;
    }

    public void setUserCreateId(Long userCreateId) {
        this.userCreateId = userCreateId;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Long getUserUpdateId() {
        return userUpdateId;
    }

    public void setUserUpdateId(Long userUpdateId) {
        this.userUpdateId = userUpdateId;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getOrderColumn() {
        return "id";
    }
}
