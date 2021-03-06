$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.payment = new DebtDetail();
        self.title = ko.observable();

        if (debtDetailId) {
            self.title("Chỉnh sửa tạm ứng");
            app.makeGet({
                url: '/finance/advance_payment/getById/' + debtDetailId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.payment);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        } else {
            self.title("Đề xuất tạm ứng");
        }

        self.back = function () {
            location.href = app.appContext + '/finance/advance_payment/';
        }

        self.isValidateForm = function () {
            //validate form
            if (!app.checkValidate(self.payment)) {
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
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn tạm ứng <b>' + self.payment.amount() + ' VNĐ</b>',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/finance/advance_payment/save',
                                    data: JSON.stringify(app.convertFormObservableJson(self.payment)),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Đề xuất tạm ứng thành công", "Thông báo");
                                            setTimeout(function () {
                                                location.href = app.appContext + '/finance/advance_payment/';
                                            }, 1000);
                                        } else {
                                            toastr.error("Có lỗi xảy ra", "ERR");
                                        }
                                    },
                                    error: function (err) {
                                        toastr.error("Có lỗi xảy ra", "ERR");
                                    }
                                });
                                pop.modal('hide');
                            }
                        }
                    ]
                });
            }
        }
    }

    var vm = new ViewModel();

    ko.validation.init({
        insertMessages: true,
        messagesOnModified: true,
        decorateElement: true,
        parseInputAttributes: true,
        errorElementClass: 'wrong-field'
    }, true);

    ko.validation.makeBindingHandlerValidatable('datepicker');

    vm.errors = ko.validation.group(vm, {deep: true});

    ko.applyBindings(vm);
});