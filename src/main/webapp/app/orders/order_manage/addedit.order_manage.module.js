$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.order = new Orders();
        self.title = ko.observable();

        self.listCustomer = ko.observableArray();
        self.listPort = ko.observableArray();

        self.selectCustomer = function () {
            for (const cust of self.listCustomer()) {
                self.order.customerId(cust.customerId());
                self.order.customerName(cust.customerName());
                self.order.customerCode("");
                self.order.customerInvoiceName("");
                self.order.taxCode(cust.taxCode());
                self.order.address(cust.address());
                self.order.contactPerson(cust.contactStaff());
                self.order.phoneContact(cust.phoneContactStaff());
                self.order.emailContact("");
                self.order.position("");
            }
        }

        self.selectStartPort = function () {
            for (const port of self.listPort()) {
                self.order.startPortId(port.portId());
                self.order.startPortName(port.portName());
            }
        }

        self.selectEndPort = function () {
            for (const port of self.listPort()) {
                self.order.endPortId(port.portId());
                self.order.endPortName(port.portName());
            }
        }

        app.makeGet({
            url: '/manage/customer/getAll',
            success: function (data) {
                if (data.success) {
                    for (const cust of data.data) {
                        self.listCustomer.push(app.convertObjectToObservable(cust, new Customer()));
                    }
                } else {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            },
            error: function (err) {
                toastr.error(err, "ERR");
            }
        });

        app.makeGet({
            url: '/manage/port/getAll',
            success: function (data) {
                if (data.success) {
                    for (const port of data.data) {
                        self.listPort.push(app.convertObjectToObservable(port, new Port()));
                    }
                } else {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            },
            error: function (err) {
                toastr.error(err, "ERR");
            }
        });

        if (orderId) {
            self.title("Chỉnh sửa hóa đơn");
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
        } else {
            self.title("Tạo mới hóa đơn");
        }

        self.back = function () {
            location.href = app.appContext + '/orders/manage/';
        }

        self.isValidateForm = function () {
            //validate form
            if (!app.checkValidate(self.order)) {
                self.errors.showAllMessages();
                app.AlertWithBtn("Bạn chưa nhập đủ thông tin yêu cầu");
                return false;
            }
            return true;
        }

        self.save = function () {
            if (self.isValidateForm()) {
                pop = app.popup({
                    title: "Thông báo",
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu hóa đơn này',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/orders/manage/save',
                                    data: JSON.stringify(app.convertFormObservableJson(self.order)),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Lưu hóa đơn thành công", "Thông báo");
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
        }
    }

    ko.validation.makeBindingHandlerValidatable('datepicker');

    var vm = new ViewModel();

    ko.validation.init({
        insertMessages: true,
        messagesOnModified: true,
        decorateElement: true,
        parseInputAttributes: true,
        errorElementClass: 'wrong-field'
    }, true);

    vm.errors = ko.validation.group(vm, {deep: true});

    ko.applyBindings(vm);
});