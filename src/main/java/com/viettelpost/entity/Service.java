package com.viettelpost.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "SERVICE")
public class Service {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "service_seq"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "SERVICE_ID")
    private Long serviceId;
    @Column(name = "SERVICE_NAME")
    private String serviceName;
    @Column(name = "SERVICE_TYPE")
    private String serviceType;
    @Column(name = "COST")
    private Long cost;
    @Column(name = "CURRENCY")
    private String currency;
    @Column(name = "NOTE")
    private String note;

    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public Long getCost() {
        return cost;
    }

    public void setCost(Long cost) {
        this.cost = cost;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getOrderColumn() {
        return "serviceId";
    }
}
