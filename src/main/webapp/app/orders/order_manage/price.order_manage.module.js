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

        self.sumAmountNotVatRevenue = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRevenue()) {
                sum = sum + item.amountNotVat();
            }
            return sum;
        });
        self.sumAmountVatRevenue = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRevenue()) {
                sum = sum + item.amountVat();
            }
            return sum;
        });
        self.sumAmountTotalRevenue = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRevenue()) {
                sum = sum + item.amountTotal();
            }
            return sum;
        });


        self.addAmountRevenue = function () {
            var orderDetail = new OrderDetail();
            orderDetail.orderId(orderId);
            orderDetail.groupCode("AMOUNT_REVENUE");
            orderDetail.serviceId(self.selectedServiceRevenue().serviceId());
            orderDetail.serviceName(self.selectedServiceRevenue().serviceName());
            orderDetail.price(self.selectedPartnerPriceRevenue() ? self.selectedPartnerPriceRevenue().price() : self.selectedServiceRevenue() ? self.selectedServiceRevenue().cost() : '');
            orderDetail.quantity(self.order.quantity());
            orderDetail.exchangeRate(1);
            self.listAmountRevenue.unshift(orderDetail);
            self.selectedServiceRevenue(null);
            self.selectedPartnerPriceRevenue(null);
        }

        self.removeAmountRevenue = function (item) {
            self.listAmountRevenue.remove(item);
        }

        self.selectServiceRevenue = function (item) {
            selectedServiceRevenue = item;
            console.log('select service');
            self.listPartnerPriceRevenue.removeAll();
            if (item && item.serviceId()) {
                app.makeGet({
                    url: '/manage/price/findByServiceId/' + item.serviceId(),
                    success: function (data) {
                        if (data.success) {
                            for (const price of data.data) {
                                self.listPartnerPriceRevenue.push(app.convertObjectToObservable(price, new Price()));
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

        self.getPartnerPriceRevenue = function (searchTerm, sourceArray) {
            var result = [];
            for (const pricePartner of self.listPartnerPriceRevenue()) {
                if (pricePartner.partnerName().toLowerCase().startsWith(searchTerm.toLowerCase().trim())) {
                    result.push(pricePartner);
                }
            }
            sourceArray(result);

        }

        //chi phi thue doi tac

        self.listPartnerPriceRent = ko.observableArray();
        self.listAmountRent = ko.observableArray();
        self.selectedServiceRent = ko.observable();
        self.selectedPartnerPriceRent = ko.observable();

        self.sumAmountNotVatRent = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRent()) {
                sum = sum + item.amountNotVat();
            }
            return sum;
        });
        self.sumAmountVatRent = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRent()) {
                sum = sum + item.amountVat();
            }
            return sum;
        });
        self.sumAmountTotalRent = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRent()) {
                sum = sum + item.amountTotal();
            }
            return sum;
        });


        self.addAmountRent = function () {
            var orderDetail = new OrderDetail();
            orderDetail.orderId(orderId);
            orderDetail.groupCode("AMOUNT_RENT");
            orderDetail.serviceId(self.selectedServiceRent().serviceId());
            orderDetail.serviceName(self.selectedServiceRent().serviceName());
            orderDetail.price(self.selectedPartnerPriceRent() ? self.selectedPartnerPriceRent().price() : self.selectedServiceRent() ? self.selectedServiceRent().cost() : '');
            orderDetail.quantity(self.order.quantity());
            orderDetail.exchangeRate(1);
            self.listAmountRent.unshift(orderDetail);
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

        //chi phi tu thuc hien
        self.listPartnerPriceProcess = ko.observableArray();
        self.listAmountProcess = ko.observableArray();
        self.selectedServiceProcess = ko.observable();
        self.selectedPartnerPriceProcess = ko.observable();

        self.sumAmountNotVatProcess = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountProcess()) {
                sum = sum + item.amountNotVat();
            }
            return sum;
        });
        self.sumAmountVatProcess = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountProcess()) {
                sum = sum + item.amountVat();
            }
            return sum;
        });
        self.sumAmountTotalProcess = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountProcess()) {
                sum = sum + item.amountTotal();
            }
            return sum;
        });


        self.addAmountProcess = function () {
            var orderDetail = new OrderDetail();
            orderDetail.orderId(orderId);
            orderDetail.groupCode("AMOUNT_PROCESS");
            orderDetail.serviceId(self.selectedServiceProcess().serviceId());
            orderDetail.serviceName(self.selectedServiceProcess().serviceName());
            orderDetail.price(self.selectedPartnerPriceProcess() ? self.selectedPartnerPriceProcess().price() : self.selectedServiceProcess() ? self.selectedServiceProcess().cost() : '');
            orderDetail.quantity(self.order.quantity());
            orderDetail.exchangeRate(1);
            self.listAmountProcess.unshift(orderDetail);
            self.selectedServiceProcess(null);
            self.selectedPartnerPriceProcess(null);
        }

        self.removeAmountProcess = function (item) {
            self.listAmountProcess.remove(item);
        }

        self.selectServiceProcess = function (item) {
            selectedServiceProcess = item;
            console.log('select service');
            self.listPartnerPriceProcess.removeAll();
            if (item && item.serviceId()) {
                app.makeGet({
                    url: '/manage/price/findByServiceId/' + item.serviceId(),
                    success: function (data) {
                        if (data.success) {
                            for (const price of data.data) {
                                self.listPartnerPriceProcess.push(app.convertObjectToObservable(price, new Price()));
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

        self.getPartnerPriceProcess = function (searchTerm, sourceArray) {
            var result = [];
            for (const pricePartner of self.listPartnerPriceProcess()) {
                if (pricePartner.partnerName().toLowerCase().startsWith(searchTerm.toLowerCase().trim())) {
                    result.push(pricePartner);
                }
            }
            sourceArray(result);

        }
        //tong gia von
        self.sumAmountNotVat = ko.dependentObservable(function () {
            return self.sumAmountNotVatRent() + self.sumAmountNotVatProcess();
        });
        self.sumAmountVat = ko.dependentObservable(function () {
            return self.sumAmountVatRent() + self.sumAmountVatProcess();
        });
        self.sumAmountTotal = ko.dependentObservable(function () {
            return self.sumAmountTotalRent() + self.sumAmountTotalProcess();
        });
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
        });
        self.sumAmountVatPay = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountPay()) {
                sum = sum + item.amountVat();
            }
            return sum;
        });
        self.sumAmountTotalPay = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountPay()) {
                sum = sum + item.amountTotal();
            }
            return sum;
        });


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
        self.profitContract = ko.observable(0);
        self.fund = ko.observable(0);
        self.fundSale = ko.observable(0);
        self.fundCS = ko.observable(0);
        self.fundOP = ko.observable(0);
        self.rateProfit = ko.dependentObservable(function () {
            return +(Math.round(self.profitContract() / (self.sumAmountNotVatRevenue() > 0 ? self.sumAmountNotVatRevenue() : 1) * 100 + "e+2") + "e-2");
        });
        self.rateFund = ko.dependentObservable(function () {
            return +(Math.round(self.fund() / (self.sumAmountNotVatRevenue() > 0 ? self.sumAmountNotVatRevenue() : 1) * 100 + "e+2") + "e-2");
        });
        self.rateSale = ko.dependentObservable(function () {
            return +(Math.round(self.fundSale() / (self.fund() > 0 ? self.fund() : 1) * 100 + "e+2") + "e-2");
        });
        self.rateCS = ko.dependentObservable(function () {
            return +(Math.round(self.fundCS() / (self.fund() > 0 ? self.fund() : 1) * 100 + "e+2") + "e-2");
        });
        self.rateOP = ko.dependentObservable(function () {
            return +(Math.round(self.fundOP() / (self.fund() > 0 ? self.fund() : 1) * 100 + "e+2") + "e-2");
        });

        self.profitNotVat = ko.dependentObservable(function () {
            var profit = self.sumAmountNotVatRevenue() - self.sumAmountNotVat();
            var profitContract = +(Math.round(self.sumAmountNotVatRevenue() * 2 / 100 + "e+2") + "e-2");
            self.profitContract(profitContract);
            var fund = profit - profitContract;
            self.fund(fund);
            var fundSale = +(Math.round(fund * 35 / 100 + "e+2") + "e-2");
            self.fundSale(fundSale);
            var fundCS = +(Math.round(fund * 12.5 / 100 + "e+2") + "e-2");
            self.fundCS(fundCS);
            var fundOP = +(Math.round(fund * 12.5 / 100 + "e+2") + "e-2");
            self.fundOP(fundOP);
            var profitContract = +(Math.round(self.sumAmountNotVatRevenue() * 2 / 100 + "e+2") + "e-2");
            return profit;
        });
        self.profitVat = ko.dependentObservable(function () {
            return self.sumAmountVatRevenue() - self.sumAmountVat();
        });

        self.profitTotal = ko.dependentObservable(function () {
            return self.sumAmountTotalRevenue() - self.sumAmountTotal();
        });

        self.profitRate = ko.dependentObservable(function () {
            return +(Math.round((self.profitNotVat() / (self.sumAmountNotVatRevenue() > 0 ? self.sumAmountNotVatRevenue() : 1) * 100) + "e+2") + "e-2");
        });


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
                            } else if (detail.groupCode == 'AMOUNT_PROCESS') {
                                self.listAmountProcess.push(app.convertObjectToObservable(detail, new OrderDetail()));
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
            listPrice.push.apply(listPrice, self.listAmountRevenue().map(x => app.convertFormObservableJson(x)));
            listPrice.push.apply(listPrice, self.listAmountRent().map(x => app.convertFormObservableJson(x)));
            listPrice.push.apply(listPrice, self.listAmountProcess().map(x => app.convertFormObservableJson(x)));
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
                                data: JSON.stringify(listPrice),
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