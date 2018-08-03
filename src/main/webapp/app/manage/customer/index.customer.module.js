$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.customer = new function () {
            this.customerName = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
            this.address = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
            this.taxCode = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
            this.phone = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
            this.contactStaff = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
            this.phoneContactStaff = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
            ;
            this.userSaleId = ko.observable();
            this.establishmentDate = ko.observable();
            this.businessType = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
            this.merchandize = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
            this.journey = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
            this.status = ko.observable();
        }
        self.listCustomer = ko.observableArray();
        self.listUser = ko.observableArray();
        self.pagingVM = new PagingVM({pageSize: 5, totalCount: 0});

        app.makeGet({
            url: '/admin/user/getAll',
            success: function (data) {
                if (data.success) {
                    for (const dept of data.data) {
                        self.listUser.push(app.convertObjectToObservable(dept, new User()));
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
            console.log(app.convertFormObservableJson(self.customer));
            self.listCustomer.removeAll();
            self.customer.currentPage = self.pagingVM.currentPage();
            self.customer.pageSize = self.pagingVM.pageSize();
            app.makePost({
                url: '/manage/customer/searchPaging',
                data: JSON.stringify(app.convertFormObservableJson(self.customer)),
                success: function (data) {
                    if (data.success) {
                        for (const user of data.data) {
                            self.listCustomer.push(app.convertObjectToObservable(user, new Customer()));
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

        self.editCustomer = function (item) {
            location.href = app.appContext + '/manage/customer/edit/' + item.customerId();
        }

        self.deleteCustomer = function (item) {
            if (item && item.customerId()) {
                pop = app.popup({
                    title: "Thông báo",
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn xóa khách hàng <b>' + item.customerName() + '</b>',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/manage/customer/delete',
                                    data: JSON.stringify(item.customerId()),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Xóa khách hàng thành công", "Thông báo");
                                            self.search();
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
            } else {
                toastr.error("Bạn chưa chọn khách hàng để xóa", "ERR");
            }
        }

        self.addnewcustomer = function () {
            location.href = app.appContext + '/manage/customer/new';
        }

        self.search();
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});