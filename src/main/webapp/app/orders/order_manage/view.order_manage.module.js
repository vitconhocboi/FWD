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

        self.back = function () {
            location.href = app.appContext + '/orders/manage/';
        }

        self.edit = function () {
            location.href = app.appContext + '/orders/manage/edit/' + orderId;
        }

        self.tableToExcel = function () {
            $.ajax({
                url: "/static/css/stylesheet.css",
                dataType: "text",
                success: function (cssText) {
                    var style = "<style>" + cssText + "</style>";
                    var uri = 'data:application/vnd.ms-excel;base64,'
                        ,
                        template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/>' + style + '</head><body><table>{table}</table></body></html>'
                        , base64 = function (s) {
                            return window.btoa(unescape(encodeURIComponent(s)))
                        }
                        , format = function (s, c) {
                            return s.replace(/{(\w+)}/g, function (m, p) {
                                return c[p];
                            })
                        }
                    // return function () {
                    var table = document.getElementById("orderReport");
                    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
                    window.location.href = uri + base64(format(template, ctx));
                }
            });
        }
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});