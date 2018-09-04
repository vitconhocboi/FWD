var ServicePort = function () {
    this.id = ko.observable();
    this.serviceId = ko.observable().extend({required: {message: "Dịch vụ không được trống"}});
    this.portId = ko.observable().extend({required: {message: "Cảng không được trống"}});
    this.partnerId = ko.observable().extend({required: {message: "Đối tác không được trống"}});
    this.price = ko.observable().numberic(2).extend({required: {message: "Giá không được trống"}});
    this.currency = ko.observable();
    this.userCreateId = ko.observable();
    this.createdDate = ko.observable();
    this.userUpdateId = ko.observable();
    this.updatedDate = ko.observable();
    this.partnerName = ko.observable();
    this.objectTypeDate = ['createdDate', 'updatedDate'];
}