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

    var vm = new ViewModel();

    ko.applyBindings(vm);
});