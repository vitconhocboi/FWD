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

    function base64ToArrayBuffer(base64) {
        var binaryString = window.atob(base64);
        var binaryLen = binaryString.length;
        var bytes = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    }

    var saveByteArray = (function () {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        return function (data, name) {
            var blob = new Blob(data, {type: "octet/stream"}),
                url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = name;
            a.click();
            window.URL.revokeObjectURL(url);
        };
    }());

    detail.downloadFile = function (item) {
        if (item) {
            $('#loading_c4e6a343-dd41-b5c5-1ef9-75eeebba032d').show();
            app.makePost({
                url: "/finance/debt_manager/download", // my URL
                data: JSON.stringify({orderNo: item.orderNo(), fileName: item.fileName()}),
                responseType: 'blob',
                headers: {'Content-Type': 'image/png', 'X-Requested-With': 'XMLHttpRequest'},
                success: function (result) {
                    saveByteArray([base64ToArrayBuffer(result.data)], item.fileName());
                    $('#loading_c4e6a343-dd41-b5c5-1ef9-75eeebba032d').hide();
                }
            });
        }
    }
}
