$(document).ready(function () {
    function ViewModel() {
        self = this;

        self.selectedItem = ko.observable();

        self.payment = new function () {
            this.deptId = ko.observable();
            this.objectDebtId = ko.observable();
            this.createdDate = new function () {
                this.FROM = ko.observable();
                this.TO = ko.observable();
            };
        }

        self.listDepartment = ko.observableArray();
        self.listUser = ko.observableArray();
        self.listAdvancePayment = ko.observableArray();

        function refresh() {
            self.selectedItem(null);
        }

        app.makeGet({
            url: '/admin/department/getAll',
            success: function (data) {
                if (data.success) {
                    for (const dept of data.data) {
                        self.listDepartment.push(app.convertObjectToObservable(dept, new Department()));
                    }
                } else {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            },
            error: function (err) {
                toastr.error(err, "ERR");
            }
        });

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

        self.pagingVM = new PagingVM({pageSize: 5, totalCount: 0});

        self.search = function () {
            self.pagingVM.currentPage(1);
            self.searchPaging(true);
        }

        self.searchPaging = function (showMsg) {
            refresh();

            console.log(app.convertFormObservableJson(self.payment));
            self.listAdvancePayment.removeAll();
            self.payment.currentPage = self.pagingVM.currentPage();
            self.payment.pageSize = self.pagingVM.pageSize();
            app.makePost({
                url: '/finance/advance_payment/search',
                data: JSON.stringify(app.convertFormObservableJson(self.payment)),
                success: function (data) {
                    if (data.success) {
                        for (const route of data.data) {
                            self.listAdvancePayment.push(app.convertObjectToObservable(route, new DebtDetail()));
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
            location.href = app.appContext + '/finance/advance_payment/edit/' + item.id();
        }

        self.addnew = function () {
            location.href = app.appContext + '/finance/advance_payment/new';
        }

        self.approve = function () {
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn ứng  <b> ' + self.selectedItem().amount.formatted() + ' VNĐ </b> cho nhân viên <b>' + self.selectedItem().objectDebtName() + '</b>',
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.makePost({
                                url: '/finance/advance_payment/approve/' + self.selectedItem().id(),
                                data: '"APPROVE"',
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Duyệt tạm ứng thành công", "Thông báo");
                                        self.searchPaging(false);
                                    } else {
                                        toastr.error("Duyệt tạm ứng không thành công", "Thông báo");
                                    }
                                },
                                error: function (err) {
                                    toastr.error("Duyệt tạm ứng không thành công", "Thông báo");
                                }
                            });
                        }
                    }
                ]
            });
        }

        self.unapprove = function () {
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn bỏ duyệt tạm ứng  <b> ' + self.selectedItem().amount.formatted() + ' VNĐ </b> cho nhân viên <b>' + self.selectedItem().objectDebtName() + '</b>',
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.makePost({
                                url: '/finance/advance_payment/approve/' + self.selectedItem().id(),
                                data: '"DENY"',
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Bỏ duyệt tạm ứng thành công", "Thông báo");
                                        self.searchPaging(false);
                                    } else {
                                        toastr.error("Bỏ duyệt tạm ứng không thành công", "Thông báo");
                                    }
                                },
                                error: function (err) {
                                    toastr.error("Bỏ duyệt tạm ứng thành công", "Thông báo");
                                }
                            });
                        }
                    }
                ]
            });
        }

        self.getPartnerName = function (partnerId) {
            if (partnerId) {
                for (const partner of self.listPartner()) {
                    if (partnerId == partner.partnerId()) {
                        return partner.partnerName();
                    }
                }
            }
            return '';
        }

        self.getPortName = function (portId) {
            if (portId) {
                for (const port of self.listPort()) {
                    if (portId == port.portId()) {
                        return port.portName();
                    }
                }
            }
            return '';
        }

        self.getStatusName = function (status) {
            if (status == 0) {
                return 'Chờ kết toán duyệt';
            } else if (status == 1) {
                return 'Đã được duyệt';
            } else if (status == -1) {
                return 'Đã bị từ chối';
            }
        }

        self.search();
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});