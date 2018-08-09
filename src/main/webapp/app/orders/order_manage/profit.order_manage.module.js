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

        //chi phi thue doi tac

        self.listAmountRent = ko.observableArray();

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


        //chi phi tu thuc hien
        self.listAmountProcess = ko.observableArray();

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
        self.listAmountPay = ko.observableArray();

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

        self.back = function () {
            location.href = app.appContext + '/orders/manage/';
        }

        self.edit = function () {
            location.href = app.appContext + '/orders/manage/edit/' + orderId;
        }

    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});