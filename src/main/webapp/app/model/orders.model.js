var Orders = function () {
    this.orderId = ko.observable();
    this.orderNo = ko.observable();
    this.deptId = ko.observable();
    this.deptName = ko.observable();
    this.deptCode = ko.observable();
    this.userSaleId = ko.observable();
    this.userName = ko.observable();
    this.phone = ko.observable();
    this.customerId = ko.observable();
    this.customerName = ko.observable();
    this.customerCode = ko.observable();
    this.customerInvoiceName = ko.observable();
    this.address = ko.observable();
    this.taxCode = ko.observable();
    this.contactPerson = ko.observable();
    this.phoneContact = ko.observable();
    this.emailContact = ko.observable();
    this.position = ko.observable();
    this.merchandise = ko.observable();
    this.quantity = ko.observable();
    this.unit = ko.observable();
    this.startPortId = ko.observable();
    this.startPortName = ko.observable();
    this.endPortId = ko.observable();
    this.endPortName = ko.observable();
    this.deliveryAddress = ko.observable();
    this.note = ko.observable();
    this.createdDate = ko.observable();
    this.updatedDate = ko.observable();
    this.paymentWithin = ko.observable();
    this.rateOrderThreshold = ko.observable();
    this.rateSaleThreshold = ko.observable();
    this.rateCsThreshold = ko.observable();
    this.rateOpThreshold = ko.observable();
    this.rateContractThreshold = ko.observable();
    this.objectTypeDate = ['createdDate', 'updatedDate'];
}