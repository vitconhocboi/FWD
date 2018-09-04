$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.servicePort = new function () {
            this.serviceId = ko.observable();
            this.portId = ko.observable();
        }
        self.listService = ko.observableArray();
        self.listPort = ko.observableArray();
        self.listPartner = ko.observableArray();
        self.listServicePort = ko.observableArray();

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


        app.makePost({
            url: '/manage/service/search',
            data: JSON.stringify({serviceType: {VALUE: ['DVGTGT', 'DVHQ'], OPERATOR: "IN"}}),
            success: function (data) {
                if (data.success) {
                    for (const service of data.data) {
                        self.listService.push(app.convertObjectToObservable(service, new Service()));
                    }
                } else {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            },
            error: function (err) {
                toastr.error(err, "ERR");
            }
        });

        self.getServiceName = function (serviceId) {
            var service = self.listService().filter(function (it) {
                return it.serviceId() == serviceId;
            });
            if (service && service.length > 0) {
                return service[0].serviceName();
            }
        }

        self.getPortName = function (portId) {
            var ports = self.listPort().filter(function (it) {
                return it.portId() == portId;
            });
            if (ports && ports.length > 0) {
                return ports[0].portName();
            }
        }

        self.getPartnerName = function (partnerId) {
            var partner = self.listPartner().filter(function (it) {
                return it.partnerId() == partnerId;
            });
            if (partner && partner.length > 0) {
                return partner[0].partnerName();
            }
        }


        self.pagingVM = new PagingVM({pageSize: 5, totalCount: 0});

        self.search = function () {
            self.pagingVM.currentPage(1);
            self.searchPaging(true);
        }

        self.searchPaging = function (showMsg) {
            console.log(app.convertFormObservableJson(self.servicePort));
            self.listServicePort.removeAll();
            self.servicePort.currentPage = self.pagingVM.currentPage();
            self.servicePort.pageSize = self.pagingVM.pageSize();
            app.makePost({
                url: '/manage/service_port/searchPaging',
                data: JSON.stringify(app.convertFormObservableJson(self.servicePort)),
                success: function (data) {
                    if (data.success) {
                        for (const sevicePort of data.data) {
                            self.listServicePort.push(app.convertObjectToObservable(sevicePort, new ServicePort()));
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
            location.href = app.appContext + '/manage/service_port/edit/' + item.id();
        }

        self.delete = function (item) {
            if (item && item.id()) {
                pop = app.popup({
                    title: "Thông báo",
                    html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn xóa dịch vụ GTGT này ',
                    width: 400,
                    buttons: [
                        {
                            name: "Đồng ý",
                            class: 'btn',
                            icon: 'fa-check',
                            action: function () {
                                app.makePost({
                                    url: '/manage/service_port/delete',
                                    data: JSON.stringify(item.id()),
                                    success: function (data) {
                                        if (data.success) {
                                            toastr.success("Xóa thành công", "Thông báo");
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
                toastr.error("Bạn phải chọn 1 bản ghi để xóa", "ERR");
            }
        }

        self.addnew = function () {
            location.href = app.appContext + '/manage/service_port/new';
        }

        self.search();
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});