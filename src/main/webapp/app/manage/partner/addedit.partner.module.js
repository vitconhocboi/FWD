$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.partner = new Partner();
        self.title = ko.observable();
        self.listUser = ko.observableArray();

        if (partnerId) {
            self.title("Chỉnh sửa đối tác");
            app.makeGet({
                url: '/manage/partner/getById/' + partnerId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.partner);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        } else {
            self.title("Thêm mới đối tác");
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
            location.href = app.appContext + '/manage/partner/';
        }

        self.save = function () {
            console.log(self.partner);
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu đối tác này',
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.makePost({
                                url: '/manage/partner/save',
                                data: JSON.stringify(app.convertFormObservableJson(self.partner)),
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Lưu đối tác thành công", "Thông báo");
                                        setTimeout(function () {
                                            location.href = app.appContext + '/manage/partner/';
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

    ko.validation.makeBindingHandlerValidatable('datepicker');

    var vm = new ViewModel();

    ko.applyBindings(vm);
});