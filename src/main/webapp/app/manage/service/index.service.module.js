$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.service = new function () {
            this.serviceName = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW();
                };
                this.OPERATOR = "LIKE";
            };
            this.serviceType = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW();
                };
                this.OPERATOR = "LIKE";
            };
        }
        self.listService = ko.observableArray();

        self.pagingVM = new PagingVM({pageSize: 5, totalCount: 0});

        self.search = function () {
            self.pagingVM.currentPage(1);
            self.searchPaging(true);
        }

        self.searchPaging = function (showMsg) {
            console.log(app.convertFormObservableJson(self.service));
            self.listService.removeAll();
            self.service.currentPage = self.pagingVM.currentPage();
            self.service.pageSize = self.pagingVM.pageSize();
            app.makePost({
                url: '/manage/service/searchPaging',
                data: JSON.stringify(app.convertFormObservableJson(self.service)),
                success: function (data) {
                    if (data.success) {
                        for (const sevice of data.data) {
                            self.listService.push(app.convertObjectToObservable(sevice, new Service()));
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

        self.edit = function (item) {
            location.href = app.appContext + '/manage/service/edit/' + item.serviceId();
        }

        self.delete = function (item) {
            if (item && item.serviceId()) {
                pop = app.popup({
                    title: "Thông báo",
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn xóa tuyến vận tải này <b>' + item.serviceName() + '</b>',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/manage/service/delete',
                                    data: JSON.stringify(item.serviceId()),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Xóa dịch vụ vận tải thành công", "Thông báo");
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
                toastr.error("Bạn chưa chọn dịch vụ vận tải để xóa", "ERR");
            }
        }

        self.addnew = function () {
            location.href = app.appContext + '/manage/service/new';
        }

        self.search();
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});