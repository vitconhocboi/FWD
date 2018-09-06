var Service = function () {
    var thisService = this;
    this.serviceId = ko.observable();
    this.serviceName = ko.observable().extend({required: {message: "Tên dịch vụ không được trống"}});
    this.serviceType = ko.observable().extend({required: {message: "Loại dịch vụ không được trống"}});
    this.cost = ko.observable();
    this.currency = ko.observable().extend({required: {message: "Loại tiền tệ không được trống"}});
    this.note = ko.observable();
    this.getServiceTypeName = function () {
        if (thisService.serviceType() == 'DVVT') {
            return "Dịch vụ vận tải";
        } else if (thisService.serviceType() == 'DVHQ') {
            return "Dịch vụ hải quan";
        } else if (thisService.serviceType() == 'DVGTGT') {
            return "Dịch vụ giá trị gia tăng";
        }
    }

    this.displayName = ko.dependentObservable(function () {
        return this.serviceType() + ' - ' + this.getServiceTypeName();
    }, this);

}