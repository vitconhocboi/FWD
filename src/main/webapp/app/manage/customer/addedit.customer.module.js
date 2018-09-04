$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.customer = new Customer();
        self.title = ko.observable();
        self.listUser = ko.observableArray();

        if (customerId) {
            self.title("Chỉnh sửa khách hàng");
            app.makeGet({
                url: '/manage/customer/getById/' + customerId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.customer);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        } else {
            self.title("Thêm mới khách hàng");
        }

        app.makeGet({
            url: '/admin/user/getAll',
            success: function (data) {
                if (data.success) {
                    for (const user of data.data) {
                        self.listUser.push(app.convertObjectToObservable(user, new User()));
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
            location.href = app.appContext + '/manage/customer/';
        }

        self.isValidateForm = function () {
            //validate form
            if (!app.checkValidate(self.customer)) {
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
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu khách hàng này',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/manage/customer/save',
                                    data: JSON.stringify(app.convertFormObservableJson(self.customer)),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Lưu khách hàng thành công", "Thông báo");
                                            setTimeout(function () {
                                                location.href = app.appContext + '/manage/customer/';
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