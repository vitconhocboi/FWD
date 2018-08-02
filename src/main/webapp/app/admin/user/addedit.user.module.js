$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.user = new User();
        self.title = ko.observable();

        self.danhsachphongban = ko.observableArray();
        if (userId) {
            self.title("Chỉnh sửa người dùng");
            app.makeGet({
                url: '/admin/user/getById/' + userId,
                success: function (data) {
                    if (data.success) {
                        app.convertObjectToObservable(data.data, self.user);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        } else {
            self.title("Thêm mới người dùng");
        }

        app.makeGet({
            url: '/admin/department/getAll',
            success: function (data) {
                if (data.success) {
                    for (const dept of data.data) {
                        self.danhsachphongban.push(app.convertObjectToObservable(dept, new Department()));
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
            location.href = app.appContext + '/admin/user/';
        }

        self.save = function () {
            console.log(self.user);
            pop = app.popup({
                title: "Thông báo",
                html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn lưu người dùng này',
                width: 400,
                buttons: [
                    {
                        name: "Đồng ý",
                        class: 'btn',
                        icon: 'fa-check',
                        action: function () {
                            app.makePost({
                                url: '/admin/user/save',
                                data: JSON.stringify(app.convertFormObservableJson(self.user)),
                                success: function (data) {
                                    if (data.success) {
                                        toastr.success("Lưu người dùng thành công", "Thông báo");
                                        location.href = app.appContext + '/admin/user/';
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