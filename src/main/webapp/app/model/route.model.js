var RouteDetail = function () {
    this.routeId = ko.observable();
    this.type = ko.observable().extend({required: {message: "Loại tuyến vận tải"}});
    this.portOfDepartureId = ko.observable().extend({required: {message: "Cảng đi không được trống"}});
    this.portOfDestinationId = ko.observable().extend({required: {message: "Cảng đến không được trống"}});
    this.transitTime = ko.observable();
    this.condition = ko.observable();
    this.preisCharge = ko.observable().extend({required: {message: "Cảng đi không được trống"}}).extend(
        {
            pattern: {
                message: "Số lượng phải là số dương",
                params: /^[1-9][0-9]*$/
            }
        });
    ;
    this.localCharge = ko.observable().extend({required: {message: "Cảng đi không được trống"}}).extend(
        {
            pattern: {
                message: "Số lượng phải là số dương",
                params: /^[1-9][0-9]*$/
            }
        });
    ;
    this.currency = ko.observable().extend({required: {message: "Loại tiền tệ không được trống"}});
    this.valid = ko.observable();
    this.partnerId = ko.observable().extend({required: {message: "Đối tác không được trống"}});
    this.serviceId = ko.observable().extend({required: {message: "Dịch vụ không được trống"}});
    this.contactPerson = ko.observable();
    this.phone = ko.observable();
    this.email = ko.observable();
    this.schedule = ko.observable();
    this.note = ko.observable();
    this.objectTypeDate = ['valid'];
}