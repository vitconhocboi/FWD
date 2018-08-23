var OrderDetail = function () {
    var self = this;
    this.id = ko.observable();
    this.orderId = ko.observable();
    this.userId = ko.observable();
    this.userName = ko.observable();
    this.groupCode = ko.observable();
    this.serviceId = ko.observable();
    this.serviceName = ko.observable();
    this.tax = ko.observable(10).numberic();
    this.deptId = ko.observable();
    this.deptCode = ko.observable();
    this.deptName = ko.observable();
    this.price = ko.observable().numberic();
    this.exchangeRate = ko.observable().numberic();
    this.quantity = ko.observable().numberic();
    this.amountNotVat = ko.dependentObservable(function () {
        return self.price() * self.quantity() * self.exchangeRate();
    }).numberic();
    this.amountVat = ko.dependentObservable(function () {
        return self.amountNotVat() * self.tax() / 100;
    }).numberic();
    this.amountTotal = ko.dependentObservable(function () {
        return self.amountNotVat() + self.amountVat();
    }).numberic();
    this.note = ko.observable();
    this.createdDate = ko.observable();
    this.updatedDate = ko.observable();
    this.partnerId = ko.observable();
    this.partnerName = ko.observable();
    this.objectTypeDate = ['createdDate', 'updatedDate'];
}