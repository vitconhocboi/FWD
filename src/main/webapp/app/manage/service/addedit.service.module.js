$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.service = new Service();
        self.title = ko.observable();

        if (serviceId) {
            self.title("Chỉnh sửa dịch vụ vận tải");
            app.makeGet({
                url: '/manage/service/getById/' + serviceId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.service);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        } else {
            self.title("Thêm mới dịch vụ vận tải");
        }

        self.back = function () {
            location.href = app.appContext + '/manage/service/';
        }

        self.isValidateForm = function () {
            //validate form
            if (!app.checkValidate(self.service)) {
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
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu dịch vụ',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/manage/service/save',
                                    data: JSON.stringify(app.convertFormObservableJson(self.service)),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Lưu dịch vụ vận tải thành công", "Thông báo");
                                            setTimeout(function () {
                                                location.href = app.appContext + '/manage/service/';
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