var Partner = function () {
    this.partnerId = ko.observable();
    this.partnerName = ko.observable().extend({required: {message: "Tên đối tác không được trống"}});
    this.address = ko.observable().extend({required: {message: "Địa chỉ không được trống"}});
    this.taxCode = ko.observable().extend({required: {message: "Mã số thuế không được trống"}});
    this.email = ko.observable().extend({required: {message: "Email không được trống"}}).extend(
        {
            pattern: {
                message: "Email không hợp lệ",
                params: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
        });
    this.phone = ko.observable().extend({required: {message: "Số điện thoại không được trống"}}).extend(
        {
            pattern: {
                message: "Số điện thoại không hợp lệ",
                params: "[0-9]+"
            }
        });
    this.contactStaff = ko.observable().extend({required: {message: "Nhân viên liên hệ không được trống"}});
    this.phoneContactStaff = ko.observable().extend({required: {message: "Số điện thoại không được trống"}}).extend(
        {
            pattern: {
                message: "Số điện thoại không hợp lệ",
                params: "[0-9]+"
            }
        });
    this.userCs = ko.observable().extend({required: {message: "Nhân viên CS không được trống"}});
    this.establishmentDate = ko.observable();
    this.businessType = ko.observable();
    this.journey = ko.observable();
    this.status = ko.observable().extend({required: {message: "Trạng thái không được trống"}});
    this.createdUser = ko.observable();
    this.createdDate = ko.observable();
    this.updatedUser = ko.observable();
    this.updatedDate = ko.observable();
    this.objectTypeDate = ['createdDate', 'updatedDate', 'establishmentDate'];
}