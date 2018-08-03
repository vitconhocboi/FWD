$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.port = new Port();
        self.title = ko.observable();
        self.listUser = ko.observableArray();

        if (portId) {
            self.title("Chỉnh sửa cảng vận tải");
            app.makeGet({
                url: '/manage/port/getById/' + portId,
                success: function (data) {
                    if (data.success) {
                        debugger
                        app.convertObjectToObservable(data.data, self.port);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        } else {
            self.title("Thêm mới cảng vận tải");
        }

        self.back = function () {
            location.href = app.appContext + '/manage/port/';
        }

        self.save = function () {
            console.log(self.port);
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu cảng vận tải này',
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.makePost({
                                url: '/manage/port/save',
                                data: JSON.stringify(app.convertFormObservableJson(self.port)),
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Lưu đối tác thành công", "Thông báo");
                                        location.href = app.appContext + '/manage/port/';
                                    } else {
                                        toastr.error("Có lỗi xảy ra", "ERR");
                                    }
                                },
                                error: function (err) {
                                    toastr.error("Có lỗi xảy ra", "ERR");
                                }
                            });
                            pop.modal('hide');
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