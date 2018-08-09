$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.selectedOrder = ko.observable();
        self.checkBtnPrice = ko.observable(false);
        self.checkbtnApprove = ko.observable(false);

        self.selectOrder = function (data) {
            console.log('selected');
            self.selectedOrder(data);

            // check price
            self.checkbtnApprove(false);
            self.checkBtnPrice(false);

            if (hasRoleAdmin == 'true' && (self.selectedOrder().status() == 1 || self.selectedOrder().status() == 2)) {
                self.checkBtnPrice(true)
            } else if (hasRoleCS == 'true' && self.selectedOrder().status() == 1) {
                self.checkBtnPrice(true)
            } else if (hasRoleOP == 'true' && self.selectedOrder().status() == 2) {
                self.checkBtnPrice(true)
            }

            //check approve
            app.makeGet({
                url: '/orders/manage/check_approve_permession/' + self.selectedOrder().orderId() + '/APPROVE',
                success: function (data) {
                    if (data.success) {
                        self.checkbtnApprove(true);
                    } else {
                        self.checkbtnApprove(false);
                    }
                },
                error: function (err) {
                    self.checkbtnApprove(false);
                }
            });
        }

        self.order = new function () {
            this.orderNo = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW().toLocaleUpperCase() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
            this.customerId = ko.observable();
            this.taxCode = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
            this.contactPerson = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable();
                this.VALUE = function () {
                    return that.VALUE_VIEW() ? '%' + that.VALUE_VIEW() + '%' : undefined;
                };
                this.OPERATOR = "LIKE";
            };
        }
        self.listOrders = ko.observableArray();
        self.pagingVM = new PagingVM({pageSize: 5, totalCount: 0});

        self.search = function () {
            self.pagingVM.currentPage(1);
            self.searchPaging(true);
        }

        self.searchPaging = function (showMsg) {
            self.checkBtnPrice(false);
            self.checkbtnApprove(false);
            console.log(app.convertFormObservableJson(self.order));
            self.listOrders.removeAll();
            self.order.currentPage = self.pagingVM.currentPage();
            self.order.pageSize = self.pagingVM.pageSize();
            app.makePost({
                url: '/orders/manage/searchPaging',
                data: JSON.stringify(app.convertFormObservableJson(self.order)),
                success: function (data) {
                    if (data.success) {
                        for (const user of data.data) {
                            self.listOrders.push(app.convertObjectToObservable(user, new Orders()));
                            self.pagingVM.totalCount(data.total);
                        }
                        if (showMsg) {
                            toastr.success("Tìm kiếm thành công", "Thông báo");
                        }
                    } else {
                        toastr.error("Có lỗi xảy ra", "Thông báo");
                    }
                },
                error: function (err) {
                    toastr.error("Có lỗi xảy ra", "Thông báo");
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
            location.href = app.appContext + '/orders/manage/edit/' + item.orderId();
        }

        self.viewDetail = function (item) {
            location.href = app.appContext + '/orders/manage/view/' + item.orderId();
        }

        self.delete = function (item) {
            if (item && item.orderId()) {
                pop = app.popup({
                    title: "Thông báo",
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn xóa đơn hàng <b>' + item.orderNo() + '</b>',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/orders/manage/delete',
                                    data: JSON.stringify(item.orderId()),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Xóa đơn hàng thành công", "Thông báo");
                                            self.search();
                                        } else {
                                            toastr.error("Có lỗi xảy ra", "Thông báo");
                                        }
                                    },
                                    error: function (err) {
                                        toastr.error("Có lỗi xảy ra", "Thông báo");
                                    }
                                });
                            }
                        }
                    ]
                });
            } else {
                toastr.error("Bạn chưa chọn đơn hàng để xóa", "Thông báo");
            }
        }

        self.addnew = function () {
            location.href = app.appContext + '/orders/manage/new';
        }


        self.price = function () {
            location.href = app.appContext + '/orders/manage/price/' + self.selectedOrder().orderId();
        }

        self.approve = function () {
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn duyệt đơn hàng <b>' + self.selectedOrder().orderNo() + '</b>',
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.makeGet({
                                url: '/orders/manage/approve/' + self.selectedOrder().orderId() + '/APPROVE',
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Duyệt đơn hàng thành công", "Thông báo");
                                        self.searchPaging(false);
                                    } else {
                                        toastr.error("Duyệt đơn hàng không thành công", "Thông báo");
                                    }
                                },
                                error: function (err) {
                                    toastr.error("Duyệt đơn hàng không thành công", "Thông báo");
                                }
                            });
                        }
                    }
                ]
            });
        }

        self.getStatusName = function (status) {
            if (status == 0) {
                return 'Mới tạo';
            } else if (status == 1) {
                return 'Chờ CS báo giá';
            } else if (status == 2) {
                return 'Chờ OP báo giá';
            } else if (status == 3) {
                return 'Chờ phân bổ lợi nhuận';
            }
        }

        self.search();
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});