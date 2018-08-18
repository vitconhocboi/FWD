package com.viettelpost.model;

import java.util.Date;

public class ProcessOrder {
    private Date estimatedStartDate;
    private Date estimatedEndDate;
    private String flowSign;

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

    public String getFlowSign() {
        return flowSign;
    }

    public void setFlowSign(String flowSign) {
        this.flowSign = flowSign;
    }
}
