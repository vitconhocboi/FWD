var Department = function () {
    this.id = ko.observable();
    this.deptName = ko.observable().extend({required: {message: 'Tên phòng ban không được trống'}});
    this.deptType = ko.observable().extend({required: {message: 'Loại phòng ban không được trống'}});
    this.parentId = ko.observable().extend({required: {message: 'Phòng ban cha không được trống'}});
    this.parentName = ko.observable();
    this.deptPath = ko.observable();
    this.unitCode = ko.observable().extend({required: {message: 'Mã phòng ban không được trống'}});
    this.objectTypeDate = [];
}