var Service = function () {
    this.serviceId = ko.observable();
    this.serviceName = ko.observable().extend({required: {message: "Tên dịch vụ không được trống"}});
    this.serviceType = ko.observable().extend({required: {message: "Loại dịch vụ không được trống"}});
    this.cost = ko.observable();
    this.currency = ko.observable().extend({required: {message: "Loại tiền tệ không được trống"}});
    this.note = ko.observable();
    this.displayName = ko.dependentObservable(function () {
        return this.serviceType() + ' - ' + this.cost();
    }, this);
}