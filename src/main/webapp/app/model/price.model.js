var Price = function () {
    this.id = ko.observable();
    this.serviceId = ko.observable();
    this.serviceName = ko.observable();
    this.serviceType = ko.observable();
    this.partnerId = ko.observable();
    this.partnerName = ko.observable();
    this.price = ko.observable();
    this.validTo = ko.observable();
    this.currency = ko.observable();
    this.objectTypeDate = ['validTo'];
    this.displayName = ko.dependentObservable(function () {
        return this.serviceName() + ': ' + this.price() + ' ' + this.currency();
    }, this);
}