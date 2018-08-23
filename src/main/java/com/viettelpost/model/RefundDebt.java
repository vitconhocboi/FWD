package com.viettelpost.model;

import com.viettelpost.entity.DebtDetail;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.List;

public class RefundDebt {
    private Long refundType;
    private Long financeType;
    private Long objectDebtId;
    private String objectDebtName;
    private Long orderId;
    private String orderNo;
    private Double amount;
    private String fileName;
    private List<DebtDetail> listRefund;
    private InputStream file;

    public Long getRefundType() {
        return refundType;
    }

    public void setRefundType(Long refundType) {
        this.refundType = refundType;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public List<DebtDetail> getListRefund() {
        return listRefund;
    }

    public void setListRefund(List<DebtDetail> listRefund) {
        this.listRefund = listRefund;
    }

    public InputStream getFile() {
        return file;
    }

    public void setFile(InputStream file) {
        this.file = file;
    }

    public Long getFinanceType() {
        return financeType;
    }

    public void setFinanceType(Long financeType) {
        this.financeType = financeType;
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
}
