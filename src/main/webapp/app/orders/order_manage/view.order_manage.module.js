$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.order = new Orders();

        if (orderId) {
            app.makeGet({
                url: '/orders/manage/getById/' + orderId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.order);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        }

        self.back = function () {
            location.href = app.appContext + '/orders/manage/';
        }

        self.edit = function () {
            location.href = app.appContext + '/orders/manage/edit/' + orderId;
        }
    }

    var vm = new ViewModel();

    ko.applyBindings(vm);
});