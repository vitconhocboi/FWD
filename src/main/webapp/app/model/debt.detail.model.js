var DebtDetail = function () {
    this.id = ko.observable();
    this.debtId = ko.observable();
    this.objectDebtId = ko.observable();
    this.objectDebtName = ko.observable();
    this.paymentType = ko.observable();
    this.reason = ko.observable();
    this.amount = ko.observable().numberic();
    this.status = ko.observable();
    this.refundDate = ko.observable();
    this.note = ko.observable();
    this.orderId = ko.observable();
    this.userCreateId = ko.observable();
    this.createdDate = ko.observable();
    this.userUpdateId = ko.observable();
    this.updatedDate = ko.observable();
    this.objectTypeDate = ['refundDate', 'createdDate', 'updatedDate'];
}