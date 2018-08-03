$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.route = new RouteDetail();
        self.title = ko.observable();
        self.listPort = ko.observableArray();
        self.listPartner = ko.observableArray();

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

        if (routeId) {
            self.title("Chỉnh sửa tuyến vận tải");
            app.makeGet({
                url: '/manage/route/getById/' + routeId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.route);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        } else {
            self.title("Thêm mới tuyến vận tải");
        }

        self.back = function () {
            location.href = app.appContext + '/manage/route/';
        }

        self.save = function () {
            console.log(self.route);
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu tuyến vận tải này',
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.makePost({
                                url: '/manage/route/save',
                                data: JSON.stringify(app.convertFormObservableJson(self.route)),
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Lưu tuyến vận tải thành công", "Thông báo");
                                        setTimeout(function () {
                                            location.href = app.appContext + '/manage/route/';
                                        }, 1000);
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