package com.viettelpost.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "ROUTE_DETAIL")
public class RouteDetail {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "route_detail_seq"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "ROUTE_ID")
    private Long routeId;

    @Column(name = "TYPE")
    private String type;

    @Column(name = "PORT_OF_DEPARTURE_ID")
    private Long portOfDepartureId;

    @Column(name = "PORT_OF_DESTINATION_ID")
    private Long portOfDestinationId;

    @Column(name = "TRANSIT_TIME")
    private String transitTime;

    @Column(name = "CONDITION")
    private String condition;

    @Column(name = "PREIS_CHARGE")
    private Long preisCharge;

    @Column(name = "LOCAL_CHARGE")
    private Long localCharge;

    @Column(name = "CURRENCY")
    private String currency;

    @Column(name = "VALID")
    private Date valid;

    @Column(name = "PARTNER_ID")
    private Long partnerId;

    @Column(name = "CONTACT_PERSON")
    private String contactPerson;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "SCHEDULE")
    private String schedule;

    @Column(name = "NOTE")
    private String note;

    public Long getRouteId() {
        return routeId;
    }

    public void setRouteId(Long routeId) {
        this.routeId = routeId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getPortOfDepartureId() {
        return portOfDepartureId;
    }

    public void setPortOfDepartureId(Long portOfDepartureId) {
        this.portOfDepartureId = portOfDepartureId;
    }

    public Long getPortOfDestinationId() {
        return portOfDestinationId;
    }

    public void setPortOfDestinationId(Long portOfDestinationId) {
        this.portOfDestinationId = portOfDestinationId;
    }

    public String getTransitTime() {
        return transitTime;
    }

    public void setTransitTime(String transitTime) {
        this.transitTime = transitTime;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public Long getPreisCharge() {
        return preisCharge;
    }

    public void setPreisCharge(Long preisCharge) {
        this.preisCharge = preisCharge;
    }

    public Long getLocalCharge() {
        return localCharge;
    }

    public void setLocalCharge(Long localCharge) {
        this.localCharge = localCharge;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Date getValid() {
        return valid;
    }

    public void setValid(Date valid) {
        this.valid = valid;
    }

    public Long getPartnerId() {
        return partnerId;
    }

    public void setPartnerId(Long partnerId) {
        this.partnerId = partnerId;
    }

    public String getContactPerson() {
        return contactPerson;
    }

    public void setContactPerson(String contactPerson) {
        this.contactPerson = contactPerson;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getOrderColumn() {
        return "routeId";
    }

}
