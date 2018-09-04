package com.viettelpost.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.InputStream;
import java.util.Date;

@Entity
@Table(name = "DEBT_DETAIL")
public class DebtDetail {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "DEBT_DETAIL_SEQ"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "ID")
    private Long id;

    @Column(name = "DEBT_ID")
    private Long debtId;

    @Column(name = "OBJECT_DEBT_ID")
    private Long objectDebtId;

    @Column(name = "OBJECT_DEBT_NAME")
    private String objectDebtName;

    @Column(name = "PAYMENT_TYPE")
    private Long paymentType;

    @Column(name = "REASON")
    private String reason;

    @Column(name = "AMOUNT")
    private Double amount;

    @Column(name = "STATUS")
    private Long status;

    @Column(name = "REFUND_DATE")
    private Date refundDate;

    @Column(name = "NOTE")
    private String note;

    @Column(name = "ORDER_ID")
    private Long orderId;

    @Column(name = "ORDER_NO")
    private String orderNo;

    @Column(name = "SERVICE_ID")
    private Long serviceId;

    @Column(name = "SERVICE_NAME")
    private String serviceName;

    @Column(name = "USER_CREATE_ID")
    private Long userCreateId;

    @Column(name = "CREATED_DATE")
    private Date createdDate;

    @Column(name = "USER_UPDATE_ID")
    private Long userUpdateId;

    @Column(name = "UPDATED_DATE")
    private Date updatedDate;

    @Column(name = "FILE_NAME")
    private String fileName;

    @Transient
    private InputStream file;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDebtId() {
        return debtId;
    }

    public void setDebtId(Long debtId) {
        this.debtId = debtId;
    }

    public Long getObjectDebtId() {
        return objectDebtId;
    }

    public void setObjectDebtId(Long objectDebtId) {
        this.objectDebtId = objectDebtId;
    }

    public String getObjectDebtName() {
        return objectDebtName;
    }

    public void setObjectDebtName(String objectDebtName) {
        this.objectDebtName = objectDebtName;
    }

    public Long getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(Long paymentType) {
        this.paymentType = paymentType;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Long getStatus() {
        return status;
    }

    public void setStatus(Long status) {
        this.status = status;
    }

    public Date getRefundDate() {
        return refundDate;
    }

    public void setRefundDate(Date refundDate) {
        this.refundDate = refundDate;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
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

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }

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

    public InputStream getFile() {
        return file;
    }

    public void setFile(InputStream file) {
        this.file = file;
    }

    public String getOrderColumn() {
        return "createdDate desc,id desc";
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}
