$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.order = new Orders();
        // doanh thu gia ban
        self.listAmountRevenue = ko.observableArray();

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

        //chi phi thue doi tac

        self.listAmountRent = ko.observableArray();

        self.sumAmountNotVatRent = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRent()) {
                sum = sum + item.amountNotVat();
            }
            return sum;
        }).numberic();
        self.sumAmountVatRent = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRent()) {
                sum = sum + item.amountVat();
            }
            return sum;
        }).numberic();
        self.sumAmountTotalRent = ko.dependentObservable(function () {
            var sum = 0;
            for (const item of self.listAmountRent()) {
                sum = sum + item.amountTotal();
            }
            return sum;
        }).numberic();


        //chi phi tu thuc hien
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
        self.listAmountPay = ko.observableArray();

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
        }).numberic();
        self.profitVat = ko.dependentObservable(function () {
            return self.sumAmountVatRevenue() - self.sumAmountVat();
        }).numberic();

        self.profitTotal = ko.dependentObservable(function () {
            return self.sumAmountTotalRevenue() - self.sumAmountTotal();
        }).numberic();

        self.profitRate = ko.dependentObservable(function () {
            return +(Math.round((self.profitNotVat() / (self.sumAmountNotVatRevenue() > 0 ? self.sumAmountNotVatRevenue() : 1) * 100) + "e+2") + "e-2");
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

        self.back = function () {
            location.href = app.appContext + '/orders/manage/';
        }
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});