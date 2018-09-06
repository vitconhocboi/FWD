$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.servicePort = new ServicePort();
        self.title = ko.observable();

        self.listService = ko.observableArray();
        self.listPort = ko.observableArray();
        self.listPartner = ko.observableArray();

        if (servicePortId) {
            self.title("Chỉnh sửa giá dịch vụ GTGT");
            app.makeGet({
                url: '/manage/service_port/getById/' + servicePortId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.servicePort);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        } else {
            self.title("Thêm mới giá dịch vụ GTGT");
        }

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

        app.makeGet({
            url: '/manage/partner/getAll',
            success: function (data) {
                if (data.success) {
                    for (const partner of data.data) {
                        self.listPartner.push(app.convertObjectToObservable(partner, new Partner()));
                    }
                } else {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            },
            error: function (err) {
                toastr.error(err, "ERR");
            }
        });

        app.makePost({
            url: '/manage/service/search',
            data: JSON.stringify({serviceType: {VALUE: ['DVGTGT', 'DVHQ'], OPERATOR: "IN"}}),
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
            location.href = app.appContext + '/manage/service_port/';
        }

        self.isValidateForm = function () {
            //validate form
            if (!app.checkValidate(self.servicePort)) {
                self.errors.showAllMessages();
                app.AlertWithBtn("Bạn chưa nhập đủ thông tin yêu cầu");
                return false;
            }
            return true;
        }

        self.selectPartner = function (partner, ev) {
            self.servicePort.partnerName(partner.partnerName());
        }

        self.save = function () {
            if (self.isValidateForm()) {
                pop = app.popup({
                    title: "Thông báo",
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu dịch vụ GTGT',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/manage/service_port/save',
                                    data: JSON.stringify(app.convertFormObservableJson(self.servicePort)),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Lưu dịch vụ GTGT thành công", "Thông báo");
                                            setTimeout(function () {
                                                location.href = app.appContext + '/manage/service_port/';
                                            }, 1000);
                                        } else {
                                            toastr.error(data.message, "ERR");
                                        }
                                    },
                                    error: function (err) {
                                        toastr.error(err.message, "ERR");
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