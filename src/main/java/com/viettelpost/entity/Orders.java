package com.viettelpost.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "ORDERS")
public class Orders {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "order_seq"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "ORDER_ID")
    private Long orderId;

    @Column(name = "ORDER_NO")
    private String orderNo;

    @Column(name = "DEPT_ID")
    private Long deptId;

    @Column(name = "DEPT_NAME")
    private String deptName;

    @Column(name = "DEPT_CODE")
    private String deptCode;

    @Column(name = "USER_SALE_ID")
    private Long userSaleId;

    @Column(name = "USER_NAME")
    private String userName;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "CUSTOMER_ID")
    private Long customerId;

    @Column(name = "CUSTOMER_NAME")
    private String customerName;

    @Column(name = "CUSTOMER_CODE")
    private String customerCode;

    @Column(name = "CUSTOMER_INVOICE_NAME")
    private String customerInvoiceName;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "TAX_CODE")
    private String taxCode;

    @Column(name = "CONTACT_PERSON")
    private String contactPerson;

    @Column(name = "PHONE_CONTACT")
    private String phoneContact;

    @Column(name = "EMAIL_CONTACT")
    private String emailContact;

    @Column(name = "POSITION")
    private String position;

    @Column(name = "MERCHANDISE")
    private String merchandise;

    @Column(name = "QUANTITY")
    private Long quantity;

    @Column(name = "UNIT")
    private String unit;

    @Column(name = "START_PORT_ID")
    private Long startPortId;

    @Column(name = "START_PORT_NAME")
    private String startPortName;

    @Column(name = "END_PORT_ID")
    private Long endPortId;

    @Column(name = "END_PORT_NAME")
    private String endPortName;

    @Column(name = "DELIVERY_ADDRESS")
    private String deliveryAddress;

    @Column(name = "NOTE")
    private String note;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "CREATED_DATE")
    private Date createdDate;

    @Column(name = "UPDATED_DATE")
    private Date updatedDate;

    @Column(name = "PAYMENT_WITHIN")
    private Long paymentWithin;

    @Column(name = "RATE_ORDER_THRESHOLD")
    private Float rateOrderThreshold;

    @Column(name = "RATE_SALE_THRESHOLD")
    private Float rateSaleThreshold;

    @Column(name = "RATE_CS_THRESHOLD")
    private Float rateCsThreshold;

    @Column(name = "RATE_OP_THRESHOLD")
    private Float rateOpThreshold;

    @Column(name = "RATE_CONTRACT_THRESHOLD")
    private Float rateContractThreshold;

    @Column(name = "RATE_PROFIT")
    private Float rateProfit;

    @Column(name = "ESTIMATED_START_DATE")
    private Date estimatedStartDate;

    @Column(name = "ESTIMATED_END_DATE")
    private Date estimatedEndDate;

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }

    public Long getDeptId() {
        return deptId;
    }

    public void setDeptId(Long deptId) {
        this.deptId = deptId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public String getDeptCode() {
        return deptCode;
    }

    public void setDeptCode(String deptCode) {
        this.deptCode = deptCode;
    }

    public Long getUserSaleId() {
        return userSaleId;
    }

    public void setUserSaleId(Long userSaleId) {
        this.userSaleId = userSaleId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

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

    public String getCustomerCode() {
        return customerCode;
    }

    public void setCustomerCode(String customerCode) {
        this.customerCode = customerCode;
    }

    public String getCustomerInvoiceName() {
        return customerInvoiceName;
    }

    public void setCustomerInvoiceName(String customerInvoiceName) {
        this.customerInvoiceName = customerInvoiceName;
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

    public String getContactPerson() {
        return contactPerson;
    }

    public void setContactPerson(String contactPerson) {
        this.contactPerson = contactPerson;
    }

    public String getPhoneContact() {
        return phoneContact;
    }

    public void setPhoneContact(String phoneContact) {
        this.phoneContact = phoneContact;
    }

    public String getEmailContact() {
        return emailContact;
    }

    public void setEmailContact(String emailContact) {
        this.emailContact = emailContact;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getMerchandise() {
        return merchandise;
    }

    public void setMerchandise(String merchandise) {
        this.merchandise = merchandise;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Long getStartPortId() {
        return startPortId;
    }

    public void setStartPortId(Long startPortId) {
        this.startPortId = startPortId;
    }

    public String getStartPortName() {
        return startPortName;
    }

    public void setStartPortName(String startPortName) {
        this.startPortName = startPortName;
    }

    public Long getEndPortId() {
        return endPortId;
    }

    public void setEndPortId(Long endPortId) {
        this.endPortId = endPortId;
    }

    public String getEndPortName() {
        return endPortName;
    }

    public void setEndPortName(String endPortName) {
        this.endPortName = endPortName;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public Long getPaymentWithin() {
        return paymentWithin;
    }

    public void setPaymentWithin(Long paymentWithin) {
        this.paymentWithin = paymentWithin;
    }

    public Float getRateOrderThreshold() {
        return rateOrderThreshold;
    }

    public void setRateOrderThreshold(Float rateOrderThreshold) {
        this.rateOrderThreshold = rateOrderThreshold;
    }

    public Float getRateSaleThreshold() {
        return rateSaleThreshold;
    }

    public void setRateSaleThreshold(Float rateSaleThreshold) {
        this.rateSaleThreshold = rateSaleThreshold;
    }

    public Float getRateCsThreshold() {
        return rateCsThreshold;
    }

    public void setRateCsThreshold(Float rateCsThreshold) {
        this.rateCsThreshold = rateCsThreshold;
    }

    public Float getRateOpThreshold() {
        return rateOpThreshold;
    }

    public void setRateOpThreshold(Float rateOpThreshold) {
        this.rateOpThreshold = rateOpThreshold;
    }

    public Float getRateContractThreshold() {
        return rateContractThreshold;
    }

    public void setRateContractThreshold(Float rateContractThreshold) {
        this.rateContractThreshold = rateContractThreshold;
    }

    public Float getRateProfit() {
        return rateProfit;
    }

    public void setRateProfit(Float rateProfit) {
        this.rateProfit = rateProfit;

    }

    public Date getEstimatedStartDate() {
        return estimatedStartDate;
    }

    public void setEstimatedStartDate(Date estimatedStartDate) {
        this.estimatedStartDate = estimatedStartDate;
    }

    public Date getEstimatedEndDate() {
        return estimatedEndDate;
    }

    public void setEstimatedEndDate(Date estimatedEndDate) {
        this.estimatedEndDate = estimatedEndDate;
    }
}
