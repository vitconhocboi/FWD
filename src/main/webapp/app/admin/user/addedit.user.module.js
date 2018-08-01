$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.user = new User();
        self.title = ko.observable();

        self.danhsachphongban = ko.observableArray();
        if (userId) {
            self.title("Chỉnh sửa người dùng");
            app.makeGet({
                url: '/admin/user/getById/' + userId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.user);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        } else {
            self.title("Thêm mới người dùng");
        }

        app.makeGet({
            url: '/admin/department/getAll',
            success: function (data) {
                if (data.success) {
                    for (const dept of data.data) {
                        self.danhsachphongban.push(app.convertObjectToObservable(dept, new Department()));
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
            location.href = app.appContext + '/admin/user/';
        }

        self.save = function () {
            console.log(self.user);
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu người dùng này',
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.makePost({
                                url: '/admin/user/save',
                                data: JSON.stringify(app.convertFormObservableJson(self.user)),
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Lưu người dùng thành công", "Thông báo");
                                        location.href = app.appContext + '/admin/user/';
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

    var vm = new ViewModel();

    ko.applyBindings(vm);
});