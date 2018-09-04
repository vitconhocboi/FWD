$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.port = new Port();
        self.title = ko.observable();
        self.listUser = ko.observableArray();

        if (portId) {
            self.title("Chỉnh sửa cảng vận tải");
            app.makeGet({
                url: '/manage/port/getById/' + portId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.port);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        } else {
            self.title("Thêm mới cảng vận tải");
        }

        self.back = function () {
            location.href = app.appContext + '/manage/port/';
        }

        self.isValidateForm = function () {
            //validate form
            if (!app.checkValidate(self.port)) {
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
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu cảng vận tải này',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/manage/port/save',
                                    data: JSON.stringify(app.convertFormObservableJson(self.port)),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Lưu cảng vận tải thành công", "Thông báo");
                                            setTimeout(function () {
                                                location.href = app.appContext + '/manage/port/';
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