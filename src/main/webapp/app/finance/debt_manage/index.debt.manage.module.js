$(document).ready(function () {
    function ViewModel() {
        self = this;

        self.selectedItem = ko.observable();

        self.debt = new function () {
            this.type = ko.observable();
            this.objectDebtId = ko.observable();
        }

        self.listCustomer = ko.observableArray();
        self.listUser = ko.observableArray();
        self.listPartner = ko.observableArray();

        self.listDebt = ko.observableArray();

        function refresh() {
            self.selectedItem(null);
        }

        app.makeGet({
            url: '/manage/customer/getAll',
            success: function (data) {
                if (data.success) {
                    for (const customer of data.data) {
                        self.listCustomer.push(app.convertObjectToObservable(customer, new Customer()));
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
            url: '/manage/partner/getAll',
            success: function (data) {
                if (data.success) {
                    for (const partner of data.data) {
                        self.listPartner.push(app.convertObjectToObservable(partner, new Partner()));
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

            console.log(app.convertFormObservableJson(self.debt));
            self.listDebt.removeAll();
            self.debt.currentPage = self.pagingVM.currentPage();
            self.debt.pageSize = self.pagingVM.pageSize();
            app.makePost({
                url: '/finance/debt_manager/searchPaging',
                data: JSON.stringify(app.convertFormObservableJson(self.debt)),
                success: function (data) {
                    if (data.success) {
                        for (const debt of data.data) {
                            self.listDebt.push(app.convertObjectToObservable(debt, new DebtManagement()));
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

        self.viewDetailDebt = function (item) {
            $.ajax({
                url: context + '/app/templates/view_detail_debt.html',
                method: 'GET',
                async: false,
                success: function (html) {
                    pop = app.popup({
                        title: "Xem chi tiết công nợ - " + item.objectDebtName(),
                        html: html,
                        width: 800
                    });

                    var detailDebtVM = new ViewDetailModel(item.id());
                    ko.applyBindings(detailDebtVM, pop[0]);
                }
            });
        }

        self.refund = function (item) {
            location.href = app.appContext + '/finance/debt_manager/refund/' + item.id();
        }

        self.search();
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});