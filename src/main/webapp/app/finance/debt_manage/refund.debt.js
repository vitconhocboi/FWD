$(document).ready(function () {
    function ViewModel() {
        var self = this;
        self.listPartner = ko.observableArray();
        self.listOrders = ko.observableArray();
        self.order = ko.observable();
        self.partner = ko.observable();

        self.refund = new function () {
            this.refundType = ko.observable(1);
            this.financeType = financeType;
            this.objectDebtId = objectDebtId;
            this.objectDebtName = objectDebtName;
            this.amount = ko.observable(0).numberic();
            this.fileName = ko.observable();
            this.fileView = ko.observable();
            this.listRefund = ko.observableArray();
        }

        self.refresh = function () {
            self.refund.amount(0);
            self.order(null);
            self.partner(null);
        }

        if (financeType == '1') {
            app.makePost({
                url: '/orders/manage/hasDebtByPartner',
                success: function (data) {
                    if (data.success) {
                        for (const order of data.data) {
                            self.listOrders.push(app.convertObjectToObservable(order, new Orders()));
                        }
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            });
        } else if (financeType == '2') {

        }

        app.makeGet({
            url: '/manage/partner/getAll',
            success: function (data) {
                if (data.success) {
                    for (const partner of data.data) {
                        var item = app.convertObjectToObservable(partner, new Partner());
                        if (financeType == '2' && objectDebtId == item.partnerId()) {
                            self.partner(item);
                            self.selectPartner(item);
                        }
                        self.listPartner.push(item);
                    }
                } else {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            },
            error: function (err) {
                toastr.error("Có lỗi xảy ra", "ERR");
            }
        });

        self.saveRefund = function () {
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn gạch nợ cho ' + debtId,
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.uploadMutipleFile({
                                url: '/finance/debt_manager/saveRefund/' + debtId,
                                data: app.convertFormObservableJson(self.refund),
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Gạch nợ thành công", "Thông báo");
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

        self.searchPartner = function (searchTerm, sourceArray) {
            var result = [];
            for (const partner of self.listPartner()) {
                if (partner.partnerName().toLowerCase().startsWith(searchTerm.toLowerCase().trim())) {
                    result.push(partner);
                }
            }
            sourceArray(result);
        }

        self.selectPartner = function (partner) {
            self.listOrders.removeAll();
            app.makePost({
                url: '/orders/manage/hasDebtByPartner',
                data: partner.partnerId(),
                success: function (data) {
                    if (data.success) {
                        for (const order of data.data) {
                            self.listOrders.push(app.convertObjectToObservable(order, new Orders()));
                        }
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            });
        }

        self.searchOrder = function (searchTerm, sourceArray) {
            var result = [];
            for (const order of self.listOrders()) {
                if (order.orderNo().toLowerCase().includes(searchTerm.toLowerCase().trim())) {
                    result.push(order);
                }
            }
            sourceArray(result);
        }


        self.selectOrder = function (order) {
            self.refund.listRefund.removeAll();
            if (financeType == '0' || financeType == '2') {
                app.makePost({
                    url: '/orders/manage/debtByPartner?orderId=' + order.orderId() + '&partnerId=' + self.partner().partnerId(),
                    success: function (data) {
                        if (data.success) {
                            for (const orderDetail of data.data) {
                                var debt = new DebtDetail();
                                debt.debtId(debtId);
                                debt.objectDebtId(self.partner().partnerId());
                                debt.objectDebtName(self.partner().partnerName());
                                debt.amount(0);
                                debt.paymentType(5);
                                debt.status(1);
                                debt.orderId(order.orderId());
                                debt.orderNo(order.orderNo());
                                debt.serviceId(orderDetail.serviceId);
                                debt.serviceName(orderDetail.serviceName);
                                self.refund.listRefund.push(debt);
                            }
                        } else {
                            toastr.error("Có lỗi xảy ra", "ERR");
                        }
                    },
                    error: function (err) {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                });
            } else if (financeType == '1') {
                self.refund.orderId = order.orderId();
                self.refund.orderNo = order.orderNo();
            }
        }


        self.fileSelect = function (elemet, event) {
            var files = event.target.files;// FileList object
            if (financeType == '1') {
                self.refund.fileName = escape(files[0].name);
                self.refund.file = files[0];

                var reader = new FileReader();

                // Closure to capture the file information.
                reader.onload = (function (theFile) {
                    return function (e) {
                        self.refund.fileView(e.target.result);
                    };
                })(self.refund.file);
                // Read in the image file as a data URL.
                reader.readAsDataURL(self.refund.file);
            } else {
                elemet.fileName(escape(files[0].name));
                elemet.file = files[0];
            }
        };
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
})
;