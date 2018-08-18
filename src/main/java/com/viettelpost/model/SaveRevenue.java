package com.viettelpost.model;

import com.viettelpost.entity.OrderDetail;

import java.util.List;

public class SaveRevenue {
    List<OrderDetail> lstOrderDetails;
    Float profitRate;

    public List<OrderDetail> getLstOrderDetails() {
        return lstOrderDetails;
    }

    public void setLstOrderDetails(List<OrderDetail> lstOrderDetails) {
        this.lstOrderDetails = lstOrderDetails;
    }

    public Float getProfitRate() {
        return profitRate;
    }

    public void setProfitRate(Float profitRate) {
        this.profitRate = profitRate;
    }
}
