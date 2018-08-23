function ViewDetailModel(debtId) {
    detail = this;

    detail.selectedItem = ko.observable();

    var currentDate = new Date();
    var firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    detail.payment = new function () {
        this.createdDate = new function () {
            this.FROM = ko.observable(firstDay);
            this.TO = ko.observable(currentDate);
        };
    }

    detail.listAdvancePayment = ko.observableArray();

    function refresh() {
        detail.selectedItem(null);
    }

    detail.pagingVM = new PagingVM({pageSize: 5, totalCount: 0});

    detail.search = function () {
        detail.pagingVM.currentPage(1);
        detail.searchPaging(true);
    }

    detail.searchPaging = function (showMsg) {
        detail.payment.debtId = debtId;
        detail.payment.currentPage = detail.pagingVM.currentPage();
        detail.payment.pageSize = detail.pagingVM.pageSize();

        console.log(app.convertFormObservableJson(detail.payment));
        detail.listAdvancePayment.removeAll();
        app.makePost({
            url: '/finance/debt_manager/detail/' + debtId,
            data: JSON.stringify(app.convertFormObservableJson(detail.payment)),
            success: function (data) {
                if (data.success) {
                    for (const route of data.data) {
                        detail.listAdvancePayment.push(app.convertObjectToObservable(route, new DebtDetail()));
                        detail.pagingVM.totalCount(data.total);
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

    detail.goToPage = function (page) {
        if (page >= detail.pagingVM.firstPage && page <= detail.pagingVM.lastPage()) {
            detail.pagingVM.setCurrentPage(page);
            detail.searchPaging(false);
        }

    };

    detail.goToFirst = function () {
        detail.pagingVM.setCurrentPage(detail.pagingVM.firstPage);
        detail.searchPaging(false);
    };

    detail.goToPrevious = function () {
        var previous = detail.pagingVM.previousPage();
        if (previous != null) {
            detail.pagingVM.setCurrentPage(previous);
            detail.searchPaging(false);
        }

    };

    detail.goToNext = function () {
        var next = detail.pagingVM.nextPage();
        if (next != null) {
            detail.pagingVM.setCurrentPage(next);
            detail.searchPaging(false);
        }

    };

    detail.goToLast = function () {
        detail.pagingVM.setCurrentPage(detail.pagingVM.lastPage());
        detail.searchPaging(false);
    };

    detail.getPaymentTypeName = function (type) {
        if (type == '0') {
            return 'Tạm ứng';
        } else if (type == '1') {
            return 'Hoàn ứng';
        } else if (type == '2') {
            return 'Phải thu';
        } else if (type == '3') {
            return 'Đã thu';
        } else if (type == '4') {
            return 'Phải trả';
        } else if (type == '5') {
            return 'Đã trả';
        }
    }


    detail.searchPaging(false);
}
