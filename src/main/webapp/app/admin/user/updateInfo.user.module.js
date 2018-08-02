$(document).ready(function () {
    function ViewModel() {
        self = this;
        self.user = new User();
        self.title = ko.observable();

        if (userModel) {
            self.user.fullName(userModel.fullName);
            self.user.departmentName = userModel.departmentName;
            self.user.userName(userModel.userName);
            self.user.password(userModel.password);
            self.user.phone(userModel.phone);
            self.user.email(userModel.email);
            self.user.dateOfBirth(userModel.dateOfBirth);
            self.user.address(userModel.address);
        }

        self.save = function () {

            app.makePost({
                url: '/saveUserInfo',
                data: JSON.stringify(app.convertFormObservableJson(self.user)),
                success: function (data) {
                    if (data.success) {
                        toastr.success("Lưu người dùng thành công", "Thông báo");
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