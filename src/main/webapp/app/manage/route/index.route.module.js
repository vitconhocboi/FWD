$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.route = new function () {
            this.portOfDepartureId = ko.observable();
            this.portOfDestinationId = ko.observable();
            this.partnerId = ko.observable();
            this.type = ko.observable();
            this.preisCharge = new function () {
                var that = this;
                this.VALUE_VIEW = ko.observable().numberic(2);
                this.VALUE = function () {
                    return that.VALUE_VIEW();
                };
                this.OPERATOR = "<=";
            };
        }
        self.listPort = ko.observableArray();
        self.listPartner = ko.observableArray();
        self.listRoute = ko.observableArray();

        app.makeGet({
            url: '/manage/port/getAll',
            success: function (data) {
                if (data.success) {
                    for (const port of data.data) {
                        self.listPort.push(app.convertObjectToObservable(port, new Port()));
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

        self.pagingVM = new PagingVM({pageSize: 5, totalCount: 0});

        self.search = function () {
            self.pagingVM.currentPage(1);
            self.searchPaging(true);
        }

        self.searchPaging = function (showMsg) {
            console.log(app.convertFormObservableJson(self.route));
            self.listRoute.removeAll();
            self.route.currentPage = self.pagingVM.currentPage();
            self.route.pageSize = self.pagingVM.pageSize();
            app.makePost({
                url: '/manage/route/searchPaging',
                data: JSON.stringify(app.convertFormObservableJson(self.route)),
                success: function (data) {
                    if (data.success) {
                        for (const route of data.data) {
                            self.listRoute.push(app.convertObjectToObservable(route, new RouteDetail()));
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
            location.href = app.appContext + '/manage/route/edit/' + item.routeId();
        }

        self.delete = function (item) {
            if (item && item.routeId()) {
                pop = app.popup({
                    title: "Thông báo",
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn xóa tuyến vận tải này',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/manage/route/delete',
                                    data: JSON.stringify(item.routeId()),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Xóa tuyến vận tải thành công", "Thông báo");
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
                toastr.error("Bạn chưa chọn tuyến vận tải để xóa", "ERR");
            }
        }

        self.addnew = function () {
            location.href = app.appContext + '/manage/route/new';
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

        self.search();
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});