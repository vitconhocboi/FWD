var DebtManagement = function () {
    this.id = ko.observable();
    this.objectDebtId = ko.observable();
    this.objectDebtName = ko.observable();
    this.type = ko.observable();
    this.amount = ko.observable().numberic();
}