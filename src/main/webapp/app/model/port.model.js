var Port = function () {
    this.portId = ko.observable();
    this.portName = ko.observable().extend({required: {message: "Tên cảng không được trống"}});
    this.portCode = ko.observable().extend({required: {message: "Mã cảng không được trống"}});
    this.location = ko.observable().extend({required: {message: "Địa điểm không được trống"}});
    this.country = ko.observable().extend({required: {message: "Quốc gia không được trống"}});
    this.area = ko.observable().extend({required: {message: "Vùng không được trống"}});
    this.note = ko.observable();
}