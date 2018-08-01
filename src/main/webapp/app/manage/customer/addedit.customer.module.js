$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.customer = new Customer();
        self.title = ko.observable();
        self.listUser = ko.observableArray();

        if (customerId) {
            self.title("Chỉnh sửa khách hàng");
            app.makeGet({
                url: '/manage/customer/getById/' + customerId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.customer);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        } else {
            self.title("Thêm mới khách hàng");
        }

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

        self.back = function () {
            location.href = app.appContext + '/manage/customer/';
        }

        self.save = function () {
            console.log(self.customer);
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu khách hàng này',
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.makePost({
                                url: '/manage/customer/save',
                                data: JSON.stringify(app.convertFormObservableJson(self.customer)),
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Lưu khách hàng thành công", "Thông báo");
                                        location.href = app.appContext + '/manage/customer/';
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
        }
    }

    ko.bindingHandlers.datepicker = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            var options = allBindingsAccessor().datepickerOptions || {};

            $(element).datepicker(options);

            //handle the field changing
            ko.utils.registerEventHandler(element, "change", function () {
                var observable = valueAccessor();
                observable($(element).datepicker("getDate"));
            });

            //handle disposal (if KO removes by the template binding)
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $(element).datepicker("destroy");
            });

        },
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor()),
                $el = $(element);

            //handle date data coming via json from Microsoft
            if (String(value).indexOf('/Date(') == 0) {
                value = new Date(parseInt(value.replace(/\/Date\((.*?)\)\//gi, "$1")));
            }

            var current = $el.datepicker("getDate");

            if (value - current !== 0) {
                $el.datepicker("setDate", value);
            }
        }
    };

    ko.validation.makeBindingHandlerValidatable('datepicker');

    var vm = new ViewModel();

    ko.applyBindings(vm);
});