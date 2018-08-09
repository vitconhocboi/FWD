var Service = function () {
    this.serviceId = ko.observable();
    this.serviceName = ko.observable();
    this.serviceType = ko.observable();
    this.cost = ko.observable();
    this.currency = ko.observable();
    this.note = ko.observable();
    this.displayName = ko.dependentObservable(function () {
        return this.serviceType() + ' - ' + this.cost();
    }, this);
}