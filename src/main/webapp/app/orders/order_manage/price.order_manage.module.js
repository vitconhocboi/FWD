$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.order = new Orders();
        self.listService = ko.observableArray();

        // doanh thu gia ban
        self.listPartnerPriceRevenue = ko.observableArray();
        self.listAmountRevenue = ko.observableArray();
        self.selectedServiceRevenue = ko.observable();
        self.selectedPartnerPriceRevenue = ko.observable();

        //chi phi thue doi tac

        self.listPartnerPriceRent = ko.observableArray();
        self.listAmountRent = ko.observableArray();
        self.selectedServiceRent = ko.observable();
        self.selectedPartnerPriceRent = ko.observable();

        self.sumAmountNotVatRevenue = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRevenue()) {
                sum = sum + item.amountNotVat();
            }
            return sum;
        }).numberic();
        self.sumAmountVatRevenue = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRevenue()) {
                sum = sum + item.amountVat();
            }
            return sum;
        }).numberic();
        self.sumAmountTotalRevenue = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRevenue()) {
                sum = sum + item.amountTotal();
            }
            return sum;
        }).numberic();

        self.sumAmountNotVatRent = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRevenue()) {
                sum = sum + item.amountNotVat();
            }
            return sum;
        }).numberic();
        self.sumAmountVatRent = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRevenue()) {
                sum = sum + item.amountVat();
            }
            return sum;
        }).numberic();
        self.sumAmountTotalRent = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRevenue()) {
                sum = sum + item.amountTotal();
            }
            return sum;
        }).numberic();


        self.addAmountRent = function () {
            var orderDetail = new OrderDetail();
            orderDetail.orderId(orderId);
            orderDetail.groupCode("AMOUNT_RENT");
            orderDetail.serviceId(self.selectedServiceRent().serviceId());
            orderDetail.serviceName(self.selectedServiceRent().serviceName());
            orderDetail.partnerId(self.selectedPartnerPriceRent().partnerId());
            orderDetail.partnerName(self.selectedPartnerPriceRent().partnerName());
            orderDetail.price(self.selectedPartnerPriceRent() ? self.selectedPartnerPriceRent().price() : self.selectedServiceRent() ? self.selectedServiceRent().cost() : '');
            orderDetail.quantity(self.order.quantity());
            orderDetail.exchangeRate(1);
            self.listAmountRent.unshift(orderDetail);

            //add revenue
            var revenue = new OrderDetail();
            revenue.orderId(orderId);
            revenue.groupCode("AMOUNT_REVENUE");
            revenue.serviceId(self.selectedServiceRent().serviceId());
            revenue.serviceName(self.selectedServiceRent().serviceName());
            revenue.price(self.selectedPartnerPriceRent() ? self.selectedPartnerPriceRent().price() : self.selectedServiceRent() ? self.selectedServiceRent().cost() : '');
            revenue.quantity(self.order.quantity());
            revenue.exchangeRate(1);
            self.listAmountRevenue.unshift(revenue);

            self.selectedServiceRent(null);
            self.selectedPartnerPriceRent(null);
        }

        self.removeAmountRent = function (item) {
            self.listAmountRent.remove(item);
        }

        self.selectServiceRent = function (item) {
            selectedServiceRent = item;
            console.log('select service');
            self.listPartnerPriceRent.removeAll();
            if (item && item.serviceId()) {
                app.makeGet({
                    url: '/manage/price/findByServiceId/' + item.serviceId(),
                    success: function (data) {
                        if (data.success) {
                            for (const price of data.data) {
                                self.listPartnerPriceRent.push(app.convertObjectToObservable(price, new Price()));
                            }
                        } else {
                            toastr.error("Có lỗi xảy ra", "ERR");
                        }
                    },
                    error: function (err) {
                        toastr.error(err, "ERR");
                    }
                });
            }
        };

        self.getPartnerPriceRent = function (searchTerm, sourceArray) {
            var result = [];
            for (const pricePartner of self.listPartnerPriceRent()) {
                if (pricePartner.partnerName().toLowerCase().startsWith(searchTerm.toLowerCase().trim())) {
                    result.push(pricePartner);
                }
            }
            sourceArray(result);

        }

        self.sumAmountNotVatProcess = ko.dependentObservable(function () {
            var sum = 0;
            sum = self.order.paymentWithin() * self.sumAmountNotVatRevenue() / 100;
            return sum;
        }).numberic();
        self.sumAmountVatProcess = ko.dependentObservable(function () {
            var sum = 0;
            sum = self.order.paymentWithin() * self.sumAmountVatRevenue() / 100;
            return sum;
        }).numberic();
        self.sumAmountTotalProcess = ko.dependentObservable(function () {
            return self.sumAmountNotVatProcess() + self.sumAmountVatProcess();
        }).numberic();

        //tong gia von
        self.sumAmountNotVat = ko.dependentObservable(function () {
            return self.sumAmountNotVatRent() + self.sumAmountNotVatProcess();
        }).numberic();
        self.sumAmountVat = ko.dependentObservable(function () {
            return self.sumAmountVatRent() + self.sumAmountVatProcess();
        }).numberic();
        self.sumAmountTotal = ko.dependentObservable(function () {
            return self.sumAmountTotalRent() + self.sumAmountTotalProcess();
        }).numberic();
        //chi phi tra ho
        self.listPartnerPricePay = ko.observableArray();
        self.listAmountPay = ko.observableArray();
        self.selectedServicePay = ko.observable();
        self.selectedPartnerPricePay = ko.observable();

        self.sumAmountNotVatPay = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountPay()) {
                sum = sum + item.amountNotVat();
            }
            return sum;
        }).numberic();
        self.sumAmountVatPay = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountPay()) {
                sum = sum + item.amountVat();
            }
            return sum;
        }).numberic();
        self.sumAmountTotalPay = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountPay()) {
                sum = sum + item.amountTotal();
            }
            return sum;
        }).numberic();


        self.addAmountPay = function () {
            var orderDetail = new OrderDetail();
            orderDetail.orderId(orderId);
            orderDetail.groupCode("AMOUNT_PAY");
            orderDetail.serviceId(self.selectedServicePay().serviceId());
            orderDetail.serviceName(self.selectedServicePay().serviceName());
            orderDetail.price(self.selectedPartnerPricePay() ? self.selectedPartnerPricePay().price() : self.selectedServicePay() ? self.selectedServicePay().cost() : '');
            orderDetail.quantity(self.order.quantity());
            orderDetail.exchangeRate(1);
            self.listAmountPay.unshift(orderDetail);
            self.selectedServicePay(null);
            self.selectedPartnerPricePay(null);
        }

        self.removeAmountPay = function (item) {
            self.listAmountPay.remove(item);
        }

        self.selectServicePay = function (item) {
            selectedServicePay = item;
            console.log('select service');
            self.listPartnerPricePay.removeAll();
            if (item && item.serviceId()) {
                app.makeGet({
                    url: '/manage/price/findByServiceId/' + item.serviceId(),
                    success: function (data) {
                        if (data.success) {
                            for (const price of data.data) {
                                self.listPartnerPricePay.push(app.convertObjectToObservable(price, new Price()));
                            }
                        } else {
                            toastr.error("Có lỗi xảy ra", "ERR");
                        }
                    },
                    error: function (err) {
                        toastr.error(err, "ERR");
                    }
                });
            }
        };

        self.getPartnerPricePay = function (searchTerm, sourceArray) {
            var result = [];
            for (const pricePartner of self.listPartnerPricePay()) {
                if (pricePartner.partnerName().toLowerCase().startsWith(searchTerm.toLowerCase().trim())) {
                    result.push(pricePartner);
                }
            }
            sourceArray(result);

        }
        //end
        //tinh loi nhuan
        self.profitContract = ko.observable(0).numberic();
        self.fund = ko.observable(0).numberic();
        self.fundSale = ko.observable(0).numberic();
        self.fundCS = ko.observable(0).numberic();
        self.fundOP = ko.observable(0).numberic();
        self.rateProfit = ko.dependentObservable(function () {
            return +(Math.round(self.profitContract() / (self.sumAmountNotVatRevenue() > 0 ? self.sumAmountNotVatRevenue() : 1) * 100 + "e+2") + "e-2");
        }).numberic(2);
        self.rateFund = ko.dependentObservable(function () {
            return +(Math.round(self.fund() / (self.sumAmountNotVatRevenue() > 0 ? self.sumAmountNotVatRevenue() : 1) * 100 + "e+2") + "e-2");
        }).numberic(2);
        self.rateSale = ko.dependentObservable(function () {
            return +(Math.round(self.fundSale() / (self.fund() > 0 ? self.fund() : 1) * 100 + "e+2") + "e-2");
        }).numberic(2);
        self.rateCS = ko.dependentObservable(function () {
            return +(Math.round(self.fundCS() / (self.fund() > 0 ? self.fund() : 1) * 100 + "e+2") + "e-2");
        }).numberic(2);
        self.rateOP = ko.dependentObservable(function () {
            return +(Math.round(self.fundOP() / (self.fund() > 0 ? self.fund() : 1) * 100 + "e+2") + "e-2");
        }).numberic(2);

        self.profitNotVat = ko.dependentObservable(function () {
            var profit = 0;
            var profitContract = 0;
            self.profitContract(profitContract);
            var fund = profit - profitContract;
            self.fund(fund);
            var fundSale = +(Math.round(fund * self.order.rateSaleThreshold() / 100 + "e+2") + "e-2");
            self.fundSale(fundSale);
            var fundCS = +(Math.round(fund * self.order.rateCsThreshold() / 100 + "e+2") + "e-2");
            self.fundCS(fundCS);
            var fundOP = +(Math.round(fund * self.order.rateOpThreshold() / 100 + "e+2") + "e-2");
            self.fundOP(fundOP);
            var profitContract = +(Math.round(self.sumAmountNotVatRevenue() * self.order.rateContractThreshold() / 100 + "e+2") + "e-2");
            return profit;
        }).numberic();
        self.profitVat = ko.dependentObservable(function () {
            return 0;
        }).numberic();

        self.profitTotal = ko.dependentObservable(function () {
            return 0;
        }).numberic();

        self.profitRate = ko.dependentObservable(function () {
            return 0;
        }).numberic(2);


        if (orderId) {
            app.makeGet({
                url: '/orders/manage/getById/' + orderId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.order);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });

            app.makeGet({
                url: '/orders/manage/detail/' + orderId,
                success: function (data) {
                    if (data.success) {
                        for (const detail of data.data) {
                            if (detail.groupCode == 'AMOUNT_REVENUE') {
                                self.listAmountRevenue.push(app.convertObjectToObservable(detail, new OrderDetail()));
                            } else if (detail.groupCode == 'AMOUNT_RENT') {
                                self.listAmountRent.push(app.convertObjectToObservable(detail, new OrderDetail()));
                            } else if (detail.groupCode == 'AMOUNT_PAY') {
                                self.listAmountPay.push(app.convertObjectToObservable(detail, new OrderDetail()));
                            }
                        }
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        }

        app.makeGet({
            url: '/manage/service/getAll',
            success: function (data) {
                if (data.success) {
                    for (const service of data.data) {
                        self.listService.push(app.convertObjectToObservable(service, new Service()));
                    }
                } else {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            },
            error: function (err) {
                toastr.error(err, "ERR");
            }
        });

        self.back = function () {
            location.href = app.appContext + '/orders/manage/';
        }

        self.save = function () {
            var listPrice = [];
            listPrice.push.apply(listPrice, self.listAmountRent().map(x => app.convertFormObservableJson(x)));
            listPrice.push.apply(listPrice, self.listAmountRent().map(x => app.convertFormObservableJson(x)));
            listPrice.push.apply(listPrice, self.listAmountRevenue().map(x => app.convertFormObservableJson(x)));
            listPrice.push.apply(listPrice, self.listAmountPay().map(x => app.convertFormObservableJson(x)));
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu doanh thu này',
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.makePost({
                                url: '/orders/manage/save_revenue/' + orderId,
                                data: JSON.stringify({lstOrderDetails: listPrice, profitRate: 0}),
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Lưu doanh thu thành công", "Thông báo");
                                        setTimeout(function () {
                                            location.href = app.appContext + '/orders/manage/';
                                        }, 1000);
                                    } else {
                                        toastr.error("Có lỗi xảy ra", "ERR");
                                    }
                                },
                                error: function (err) {
                                    toastr.error("Có lỗi xảy ra", "ERR");
                                }
                            });
                        }
                    }
                ]
            });
        }


        self.getService = function (searchTerm, sourceArray) {
            var result = [];
            for (const service of self.listService()) {
                if (service.serviceName().toLowerCase().startsWith(searchTerm.toLowerCase().trim())) {
                    result.push(service);
                }
            }
            sourceArray(result);

        }
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});