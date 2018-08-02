var Department = function () {
    this.id = ko.observable();
    this.deptName = ko.observable();
    this.deptType = ko.observable();
    this.parentId = ko.observable();
    this.parentName = ko.observable();
    this.deptPath = ko.observable();
    this.unitCode = ko.observable();
    this.objectTypeDate = [];
}