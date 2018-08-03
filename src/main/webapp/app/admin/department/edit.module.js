$(document).ready(function () {
    function ViewModel() {
        var self = this;
        self.danhsachphongban = ko.observableArray();
        self.title = ko.observable();

        self.currentDepartment = new Department();

        app.makeGet({
            url: '/admin/department/getAll',
            success: function (data) {
                if (data.success) {
                    for (const dept of data.data) {
                        self.danhsachphongban.push(app.convertObjectToObservable(dept, new Department()));
                        if (parentId) {
                            if (parentId == dept.id) {
                                self.title("THÊM MỚI PHÒNG BAN TRỰC THUỘC: " + dept.deptName);
                            }
                        }
                    }
                } else {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            },
            error: function (err) {
                toastr.error("Có lỗi xảy ra", "ERR");
            }
        });

        function getDepartmentById(id, ob) {
            app.makeGet({
                url: '/admin/department/getById/' + id,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, ob);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            });
        }

        self.back = function () {
            location.href = app.appContext + '/admin/department/';
        }

        self.save = function () {
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu phòng ban' + '</b>',
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.makePost({
                                url: '/admin/department/save',
                                data: JSON.stringify(app.convertFormObservableJson(self.currentDepartment)),
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Lưu phòng ban thành công", "Thông báo");
                                        location.href = app.appContext + '/admin/department/';
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
        if (departmentId) {
            self.title("CHỈNH SỬA PHÒNG BAN");
            getDepartmentById(departmentId, self.currentDepartment);
        }
        if (parentId) {
            self.currentDepartment.parentId(parentId);
        }
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});