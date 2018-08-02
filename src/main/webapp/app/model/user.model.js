var User = function () {
    this.userId = ko.observable();
    this.userName = ko.observable();
    this.password = ko.observable();
    this.fullName = ko.observable();
    this.active = ko.observable();
    this.deptId = ko.observable();
    this.email = ko.observable();
    this.phone = ko.observable();
    this.dateOfBirth = ko.observable();
    this.address = ko.observable();
    this.objectTypeDate = ['dateOfBirth'];
}