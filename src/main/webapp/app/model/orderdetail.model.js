var OrderDetail = function () {
    var self = this;
    this.id = ko.observable();
    this.orderId = ko.observable();
    this.userId = ko.observable();
    this.userName = ko.observable();
    this.groupCode = ko.observable();
    this.serviceId = ko.observable();
    this.serviceName = ko.observable();
    this.tax = ko.observable(10);
    this.deptId = ko.observable();
    this.deptCode = ko.observable();
    this.deptName = ko.observable();
    this.price = ko.observable();
    this.exchangeRate = ko.observable();
    this.quantity = ko.observable();
    this.amountNotVat = ko.dependentObservable(function () {
        return this.price() * this.quantity() * this.exchangeRate();
    }, this);
    this.amountVat = ko.dependentObservable(function () {
        return this.amountNotVat() * this.tax() / 100;
    }, this);
    this.amountTotal = ko.dependentObservable(function () {
        return this.amountNotVat() + this.amountVat();
    }, this);
    this.note = ko.observable();
    this.createdDate = ko.observable();
    this.updatedDate = ko.observable();
    this.objectTypeDate = ['createdDate', 'updatedDate'];
}