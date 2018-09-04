var Customer = function () {
    this.customerId = ko.observable();
    this.customerName = ko.observable().extend({required: {message: "Tên khách hàng không được trống"}});
    this.address = ko.observable().extend({required: {message: "Địa chỉ không được trống"}});
    this.taxCode = ko.observable().extend({required: {message: "Mã số thuế không được trống"}});
    this.phone = ko.observable().extend({required: {message: "Số điện thoại không được trống"}}).extend(
        {
            pattern: {
                message: "Số điện thoại không hợp lệ",
                params: "[0-9]+"
            }
        });
    this.contactStaff = ko.observable().extend({required: {message: "Nhân viên liên hệ không được trống"}});
    this.phoneContactStaff = ko.observable().extend({required: {message: "Số điện thoại nhân viên liên hệ không được trống"}}).extend(
        {
            pattern: {
                message: "Số điện thoại không hợp lệ",
                params: "[0-9]+"
            }
        });
    this.userSaleId = ko.observable().extend({required: {message: "Nhân viên sale không được trống"}});
    this.establishmentDate = ko.observable().extend({required: {message: "Ngày thành lập không được trống"}});
    this.businessType = ko.observable();
    this.merchandize = ko.observable();
    this.journey = ko.observable();
    this.status = ko.observable().extend({required: {message: "Trạng thái không được trống"}});
    this.createdUser = ko.observable();
    this.createdDate = ko.observable();
    this.updatedUser = ko.observable();
    this.updatedDate = ko.observable();
    this.objectTypeDate = ['establishmentDate', 'createdDate', 'updatedDate'];
}