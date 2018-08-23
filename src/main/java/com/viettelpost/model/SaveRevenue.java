package com.viettelpost.model;

import com.viettelpost.entity.OrderDetail;

import java.util.List;

public class SaveRevenue {
    private List<OrderDetail> lstOrderDetails;
    private Float profitRate;
    private Double amountRevenue;
    private Double amountRevenueVat;
    private Double amountRevenueTotal;
    private Double amountFee;
    private Double amountFeeVat;
    private Double amountFeeTotal;
    private Double amountProfit;
    private Double amountProfitVat;
    private Double amountProfitTotal;
    private Double amountFund;
    private Double amountSale;
    private Double amountCs;
    private Double amountOp;

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

    public Double getAmountRevenue() {
        return amountRevenue;
    }

    public void setAmountRevenue(Double amountRevenue) {
        this.amountRevenue = amountRevenue;
    }

    public Double getAmountRevenueVat() {
        return amountRevenueVat;
    }

    public void setAmountRevenueVat(Double amountRevenueVat) {
        this.amountRevenueVat = amountRevenueVat;
    }

    public Double getAmountRevenueTotal() {
        return amountRevenueTotal;
    }

    public void setAmountRevenueTotal(Double amountRevenueTotal) {
        this.amountRevenueTotal = amountRevenueTotal;
    }

    public Double getAmountFee() {
        return amountFee;
    }

    public void setAmountFee(Double amountFee) {
        this.amountFee = amountFee;
    }

    public Double getAmountFeeVat() {
        return amountFeeVat;
    }

    public void setAmountFeeVat(Double amountFeeVat) {
        this.amountFeeVat = amountFeeVat;
    }

    public Double getAmountFeeTotal() {
        return amountFeeTotal;
    }

    public void setAmountFeeTotal(Double amountFeeTotal) {
        this.amountFeeTotal = amountFeeTotal;
    }

    public Double getAmountProfit() {
        return amountProfit;
    }

    public void setAmountProfit(Double amountProfit) {
        this.amountProfit = amountProfit;
    }

    public Double getAmountProfitVat() {
        return amountProfitVat;
    }

    public void setAmountProfitVat(Double amountProfitVat) {
        this.amountProfitVat = amountProfitVat;
    }

    public Double getAmountProfitTotal() {
        return amountProfitTotal;
    }

    public void setAmountProfitTotal(Double amountProfitTotal) {
        this.amountProfitTotal = amountProfitTotal;
    }

    public Double getAmountFund() {
        return amountFund;
    }

    public void setAmountFund(Double amountFund) {
        this.amountFund = amountFund;
    }

    public Double getAmountSale() {
        return amountSale;
    }

    public void setAmountSale(Double amountSale) {
        this.amountSale = amountSale;
    }

    public Double getAmountCs() {
        return amountCs;
    }

    public void setAmountCs(Double amountCs) {
        this.amountCs = amountCs;
    }

    public Double getAmountOp() {
        return amountOp;
    }

    public void setAmountOp(Double amountOp) {
        this.amountOp = amountOp;
    }
}
