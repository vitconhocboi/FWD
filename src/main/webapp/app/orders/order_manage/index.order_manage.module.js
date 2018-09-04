$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.selectedOrder = ko.observable();
        self.checkBtnPrice = ko.observable(false);
        self.checkbtnApprove = ko.observable(false);
        self.checkbtnDeny = ko.observable(false);
        self.checkbtnPendding = ko.observable(false);
        self.checkbtnDestroy = ko.observable(false);
        self.checkProfitDistribute = ko.observable(false);

        self.estimatedStartDate = ko.observable();
        self.estimatedEndDate = ko.observable();
        self.endDate = ko.observable();

        self.note = ko.observable();

        self.selectOrder = function (data) {
            console.log('selected');
            self.selectedOrder(data);

            // check price
            self.checkbtnApprove(false);
            self.checkBtnPrice(false);
            self.checkProfitDistribute(false);
            self.checkbtnDeny(false);
            self.checkbtnPendding(false);

            if (hasRoleAdmin == 'true' && (self.selectedOrder().status() == 1 || self.selectedOrder().status() == 2 || self.selectedOrder().status() == 6)) {
                self.checkBtnPrice(true)
            } else if (hasRoleCS == 'true' && self.selectedOrder().status() == 1) {
                self.checkBtnPrice(true)
            } else if (hasRoleOP == 'true' && (self.selectedOrder().status() == 2 || self.selectedOrder().status() == 6)) {
                self.checkBtnPrice(true)
            }

            //check approve
            app.makePost({
                url: '/orders/manage/check_approve_permession/' + self.selectedOrder().orderId(),
                data: JSON.stringify(['APPROVE', 'PROCESS_ORDER']),
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

            //check deny
            app.makePost({
                url: '/orders/manage/check_approve_permession/' + self.selectedOrder().orderId(),
                data: JSON.stringify(['DENY']),
                success: function (data) {
                    if (data.success) {
                        self.checkbtnDeny(true);
                    } else {
                        self.checkbtnDeny(false);
                    }
                },
                error: function (err) {
                    self.checkbtnDeny(false);
                }
            });

            //check pendding
            app.makePost({
                url: '/orders/manage/check_approve_permession/' + self.selectedOrder().orderId(),
                data: JSON.stringify(['PENDDING']),
                success: function (data) {
                    if (data.success) {
                        self.checkbtnPendding(true);
                    } else {
                        self.checkbtnPendding(false);
                    }
                },
                error: function (err) {
                    self.checkbtnPendding(false);
                }
            });

            //check profit distribute

            if (hasRoleAdmin == 'true' && (self.selectedOrder().status() == 3 || self.selectedOrder().status() == 9)) {
                self.checkProfitDistribute(true)
            } else if (hasRoleSale == 'true' && (self.selectedOrder().status() == 3 || self.selectedOrder().status() == 9)) {
                self.checkProfitDistribute(true)
            }

            //check destroy
            app.makePost({
                url: '/orders/manage/check_approve_permession/' + self.selectedOrder().orderId(),
                data: JSON.stringify(['DESTROY']),
                success: function (data) {
                    if (data.success) {
                        self.checkbtnDestroy(true);
                    } else {
                        self.checkbtnDestroy(false);
                    }
                },
                error: function (err) {
                    self.checkbtnDestroy(false);
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

        function refesh() {
            self.checkBtnPrice(false);
            self.checkbtnApprove(false);
            self.checkbtnPendding(false);
            self.checkbtnDeny(false);
            self.checkProfitDistribute(false);
        }

        self.searchPaging = function (showMsg) {
            refesh();
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

        self.profitDistribute = function () {
            location.href = app.appContext + '/orders/manage/profit/' + self.selectedOrder().orderId();
        }

        self.approve = function () {
            if ((self.selectedOrder().status() == 3 && self.selectedOrder().rateProfit() > self.selectedOrder().rateOrderThreshold()) || self.selectedOrder().status() == 5) {
                pop = app.popup({
                    title: "Thông báo",
                    html: 'Đơn hàng <b>' + self.selectedOrder().orderNo() + '</b> đã đủ điều kiện chuyển hàng. Bạn có chắc chắn muốn xử lý?<br>' +
                    '<form class="form-horizontal">' +
                    '    <div class="form-group">' +
                    '        <div class="col-sm-12">' +
                    '            <label class="col-sm-4">' +
                    '               Ngày dự kiến đi' +
                    '                <span class="nsw-require-field">*</span>' +
                    '            </label>' +
                    '            <div class="col-sm-8">' +
                    '                <input name="establishmentDate" ' +
                    '                    class="form-control form-control-inline date-picker"' +
                    '                    data-date-format="dd/mm/yyyy" size="16" type="text"' +
                    '                    placeholder="dd/mm/yyyy"' +
                    '                    data-bind="datepicker: $root.estimatedStartDate"/>' +
                    '            </div>' +
                    '        </div>' +
                    '    </div>' +
                    '    <div class="form-group">' +
                    '        <div class="col-sm-12">' +
                    '            <label class="col-sm-4">' +
                    '                Ngày dự kiến đến' +
                    '                <span class="nsw-require-field">*</span>' +
                    '            </label>' +
                    '            <div class="col-sm-8">' +
                    '                <input name="establishmentDate"' +
                    '                    class="form-control form-control-inline date-picker"' +
                    '                    data-date-format="dd/mm/yyyy" size="16" type="text"' +
                    '                    placeholder="dd/mm/yyyy"' +
                    '                    data-bind="datepicker: $root.estimatedEndDate"/>' +
                    '            </div>' +
                    '        </div>' +
                    '    </div>' +
                    '</form>',
                    width: 600,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/orders/manage/process_order/' + self.selectedOrder().orderId(),
                                    data: JSON.stringify({
                                        estimatedStartDate: self.estimatedStartDate(),
                                        estimatedEndDate: self.estimatedEndDate(),
                                        orderStatus: self.selectedOrder().status(),
                                        flowSign: 'PROCESS_ORDER'
                                    }),
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
                ko.applyBindings(vm, pop[0]);
            } else {
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
                                app.makePost({
                                    url: '/orders/manage/approve/' + self.selectedOrder().orderId(),
                                    data: JSON.stringify({flow: "APPROVE", orderStatus: self.selectedOrder().status()}),
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
        }


        self.deny = function () {
            self.note(null);
            $.ajax({
                url: context + '/app/templates/deny_order.html',
                method: 'GET',
                async: false,
                success: function (html) {
                    pop = app.popup({
                        title: "Từ chối đơn hàng: <b>" + self.selectedOrder().orderNo() + "</b>",
                        html: html,
                        width: 400,
                        buttons: [
                            {
                                name: "Đồng ý",
                                class: 'btn',
                                icon: 'fa-check',
                                action: function () {
                                    app.makePost({
                                        url: '/orders/manage/approve/' + self.selectedOrder().orderId(),
                                        data: JSON.stringify({
                                            flow: "DENY",
                                            note: self.note(),
                                            orderStatus: self.selectedOrder().status()
                                        }),
                                        success: function (data) {
                                            if (data.success) {
                                                toastr.success("Từ chối đơn hàng thành công", "Thông báo");
                                                self.searchPaging(false);
                                            } else {
                                                toastr.error("Từ chối đơn hàng không thành công", "Thông báo");
                                            }
                                        },
                                        error: function (err) {
                                            toastr.error("Từ chối đơn hàng không thành công", "Thông báo");
                                        }
                                    });
                                }
                            }
                        ]
                    });
                    ko.applyBindings(vm, pop[0]);
                }
            });

        }

        self.pendding = function () {
            self.note(null);
            $.ajax({
                url: context + '/app/templates/deny_order.html',
                method: 'GET',
                async: false,
                success: function (html) {
                    pop = app.popup({
                        title: "Tạm dừng đơn hàng: <b>" + self.selectedOrder().orderNo() + "</b>",
                        html: html,
                        width: 400,
                        buttons: [
                            {
                                name: "Đồng ý",
                                class: 'btn',
                                icon: 'fa-check',
                                action: function () {
                                    app.makePost({
                                        url: '/orders/manage/approve/' + self.selectedOrder().orderId(),
                                        data: JSON.stringify({
                                            flow: "PENDDING",
                                            note: self.note(),
                                            orderStatus: self.selectedOrder().status()
                                        }),
                                        success: function (data) {
                                            if (data.success) {
                                                toastr.success("Tạm dừng đơn hàng thành công", "Thông báo");
                                                self.searchPaging(false);
                                            } else {
                                                toastr.error("Tạm dừng đơn hàng không thành công", "Thông báo");
                                            }
                                        },
                                        error: function (err) {
                                            toastr.error("Tạm dừng đơn hàng không thành công", "Thông báo");
                                        }
                                    });
                                }
                            }
                        ]
                    });
                    ko.applyBindings(vm, pop[0]);
                }
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
            } else if (status == 4) {
                return 'Đang thực hiện';
            } else if (status == 7) {
                return 'Đã hoàn thành';
            } else if (status == 8) {
                return 'Đã đóng';
            } else if (status == 5) {
                return 'Lãnh đạo đã duyệt';
            } else if (status == 6) {
                return 'Tạm dừng';
            } else if (status == -1) {
                return 'Đã hủy';
            } else if (status == 9) {
                return 'Sale xác nhận';
            } else if (status == 10) {
                return 'Đơn hàng chờ hủy';
            } else if (status == 11) {
                return 'Lãnh đạo duyệt';
            }
        }

        self.getActionName = function (action) {
            if (action == 'APPROVE') {
                return 'Duyệt';
            } else if (action == 'DISTRIBUTE_PROFIT') {
                return 'Phân bổ lợi ích';
            } else if (action == 'CS_PRICE_ORDER') {
                return 'CS báo giá đơn hàng';
            } else if (action == 'OP_PRICE_ORDER') {
                return 'OP báo giá đơn hàng';
            } else if (action == 'DENY') {
                return 'Từ chối';
            } else if (action == 'PROCESS_ORDER') {
                return 'Thực hiện đơn hàng';
            }
        }


        self.showHistory = function (item) {
            app.makeGet({
                url: '/orders/manage/history/' + item.orderId(),
                success: function (data) {
                    if (data.success) {
                        pop = app.popup({
                            title: "Lịch sử tác động đơn hàng: <b>" + self.selectedOrder().orderNo() + "</b>",
                            html: "<div data-bind='simpleGrid: gridViewModel'> </div>",
                            width: 800
                        });
                        var PagedGridModel = function (items) {
                            this.items = ko.observableArray(items);
                            this.gridViewModel = new ko.simpleGrid.viewModel({
                                data: this.items,
                                columns: [
                                    {headerText: "Tác động", rowText: "actionName"},
                                    {headerText: "Trạng thái đầu", rowText: "oldStatusName"},
                                    {headerText: "Trạng thái sau", rowText: "newStatusName"},
                                    {headerText: "Người tác động", rowText: "fullName"},
                                    {headerText: "Ngày tác động", rowText: "actionDate"},
                                    {headerText: "Ghi chú", rowText: "note"}
                                ],
                                pageSize: 5
                            });
                        };
                        var lstItem = data.data.map(item => {
                            item.actionName = self.getActionName(item.action);
                            item.oldStatusName = self.getStatusName(item.oldStatus);
                            item.newStatusName = self.getStatusName(item.newStatus);
                            item.actionDate = moment(item.actionDate).format('DD/MM/YYYY HH:mm:ss')
                            return item;
                        });
                        ko.applyBindings(new PagedGridModel(lstItem), pop[0]);
                    } else {
                        toastr.error("Có lỗi xảy ra", "Thông báo");
                    }
                },
                error: function (err) {
                    toastr.error("Có lỗi xảy ra", "Thông báo");
                }
            });
        }


        self.search();
    }

    var vm = new ViewModel();

    ko.validation.makeBindingHandlerValidatable('datepicker');

    ko.applyBindings(vm);
});