var Orders = function () {
    this.orderId = ko.observable();
    this.orderNo = ko.observable();
    this.deptId = ko.observable();
    this.deptName = ko.observable();
    this.deptCode = ko.observable();
    this.userSaleId = ko.observable();
    this.userName = ko.observable();
    this.phone = ko.observable();
    this.customerId = ko.observable().extend({required: {message: "Khách hàng không được trống"}});
    this.customerName = ko.observable();
    this.customerCode = ko.observable();
    this.customerInvoiceName = ko.observable().extend({required: {message: "Thông tin xuất hóa đơn không được trống"}});
    this.address = ko.observable().extend({required: {message: "Địa chỉ không được trống"}});
    this.taxCode = ko.observable().extend({required: {message: "Mã số thuế không được trống"}});
    this.contactPerson = ko.observable().extend({required: {message: "Người liên hệ không được trống"}});
    this.phoneContact = ko.observable().extend({required: {message: "Số điện thoại không được trống"}}).extend(
        {
            pattern: {
                message: "Số điện thoại không hợp lệ",
                params: "[0-9]+"
            }
        });
    this.emailContact = ko.observable().extend({required: {message: "Email không được trống"}}).extend(
        {
            pattern: {
                message: "Email không hợp lệ",
                params: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
        });
    this.position = ko.observable().extend({required: {message: "Chức vụ không được trống"}});
    this.merchandise = ko.observable().extend({required: {message: "Mô tả hàng hóa không được trống"}});
    this.quantity = ko.observable().extend({required: {message: "Số lượng không được trống"}}).extend(
        {
            pattern: {
                message: "Số lượng phải là số dương",
                params: /^[1-9][0-9]*$/
            }
        });
    this.unit = ko.observable().extend({required: {message: "Đơn vị không được trống"}});
    this.startPortId = ko.observable().extend({required: {message: "Cảng đi không được trống"}});
    this.startPortName = ko.observable();
    this.endPortId = ko.observable().extend({required: {message: "Cảng đến không được trống"}});
    this.endPortName = ko.observable();
    this.deliveryAddress = ko.observable().extend({required: {message: "Địa điểm giao hàng không được trống"}});
    this.note = ko.observable();
    this.createdDate = ko.observable();
    this.updatedDate = ko.observable();
    this.paymentWithin = ko.observable().extend({required: {message: "Thời gian hoàn thành tài chính không được trống"}});
    this.rateOrderThreshold = ko.observable();
    this.rateSaleThreshold = ko.observable();
    this.rateCsThreshold = ko.observable();
    this.rateOpThreshold = ko.observable();
    this.rateContractThreshold = ko.observable();
    this.rateProfit = ko.observable();
    this.estimatedStartDate = ko.observable();
    this.estimatedEndDate = ko.observable();
    this.amountRevenue = ko.observable();
    this.amountRevenueVat = ko.observable();
    this.amountRevenueTotal = ko.observable();
    this.amountFee = ko.observable();
    this.amountFeeVat = ko.observable();
    this.amountFeeTotal = ko.observable();
    this.amountProfit = ko.observable();
    this.amountProfitVat = ko.observable();
    this.amountProfitTotal = ko.observable();
    this.amountFund = ko.observable();
    this.amountSale = ko.observable();
    this.amountCs = ko.observable();
    this.amountOp = ko.observable();




    this.objectTypeDate = ['createdDate', 'updatedDate', 'estimatedStartDate', 'estimatedEndDate'];
}