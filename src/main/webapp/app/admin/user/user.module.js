$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.searchUser = new User();
        self.danhsachphongban = ko.observableArray();
        self.danhsachuser = ko.observableArray();
        self.pagingVM = new PagingVM({pageSize: 5, totalCount: 0});

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

        self.search = function () {
            self.pagingVM.currentPage(1);
            self.searchPaging(true);
        }

        self.searchPaging = function (showMsg) {
            console.log(app.convertFormObservableJson(self.searchUser));
            self.danhsachuser.removeAll();
            self.searchUser.currentPage = self.pagingVM.currentPage();
            self.searchUser.pageSize = self.pagingVM.pageSize();
            app.makePost({
                url: '/admin/user/searchPaging',
                data: JSON.stringify(app.convertFormObservableJson(self.searchUser)),
                success: function (data) {
                    if (data.success) {
                        for (const user of data.data) {
                            self.danhsachuser.push(app.convertObjectToObservable(user, new User()));
                            self.pagingVM.totalCount(data.total);
                        }
                        if (showMsg) {
                            toastr.success("Tìm kiếm thành công", "Thông báo");
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

        self.goToPage = function (page) {
            if (page >= self.pagingVM.firstPage && page <= self.pagingVM.lastPage()) {
                self.pagingVM.setCurrentPage(page);
                self.searchPaging(false);
            }

        };

        self.goToFirst = function () {
            self.pagingVM.setCurrentPage(self.pagingVM.firstPage);
            self.searchPaging(false);
        };

        self.goToPrevious = function () {
            var previous = self.pagingVM.previousPage();
            if (previous != null) {
                self.pagingVM.setCurrentPage(previous);
                self.searchPaging(false);
            }

        };

        self.goToNext = function () {
            var next = self.pagingVM.nextPage();
            if (next != null) {
                self.pagingVM.setCurrentPage(next);
                self.searchPaging(false);
            }

        };

        self.goToLast = function () {
            self.pagingVM.setCurrentPage(self.pagingVM.lastPage());
            self.searchPaging(false);
        };

        self.editUser = function (item) {
            location.href = app.appContext + '/admin/user/edit/' + item.userId();
        }

        self.deleteUser = function (item) {
            if (item && item.userId()) {
                pop = app.popup({
                    title: "Thông báo",
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn xóa người dùng <b>' + item.username() + '</b>',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/admin/user/delete',
                                    data: JSON.stringify(item.userId()),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Xóa người dùng thành công", "Thông báo");
                                            self.search();
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
            } else {
                toastr.error("Bạn chưa chọn phòng ban để xóa", "ERR");
            }
        }

        self.addnewuser = function () {
            location.href = app.appContext + '/admin/user/new';
        }

        self.search();
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});