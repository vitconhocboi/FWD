$(document).ready(function () {
    function ViewModel() {
        var self = this;
        self.danhsachphongban;
        self.selected = new Department();

        self.treeOption = ko.observable({});

        function loadDepartment() {
            app.makeGet({
                url: '/admin/department/getAll',
                success: function (data) {
                    if (data.success) {
                        self.danhsachphongban = data.data;
                        buildTree(self.danhsachphongban);
                    } else {
                        toastr.error("Có lỗi xảy ra", "ERR");
                    }
                },
                error: function (err) {
                    toastr.error(err, "ERR");
                }
            });
        }

        loadDepartment();

        function buildTree(danhsachphongban) {
            var tree = [];
            for (const item of danhsachphongban) {
                item.expanded = false;
                item.text = item.deptName;
                item.items = [];
                if (!item.parentId) {
                    tree.push(item);
                } else {
                    for (const it of tree) {
                        pushChild(it, item);
                    }
                }
            }

            self.treeOption({
                items: tree,
                width: 300,
                onItemClick: function (e) {
                    var item = e.itemData;
                    self.selected.id(item.id);
                    self.selected.deptName(item.deptName);
                    self.selected.deptType(item.deptType);
                    self.selected.parentId(item.parentId);
                    self.selected.deptPath(item.deptPath);
                    self.selected.parentName(item.parentName);
                    self.selected.unitCode(item.unitCode);
                }
            });
        }

        function pushChild(tree, child) {
            if (tree.id === child.parentId) {
                child.parentName = tree.deptName;
                tree.items.push(child);
                return;
            } else {
                for (const item of tree.items) {
                    pushChild(item, child);
                }
            }
        }

        self.addChild = function () {
            if (self.selected.id()) {
                location.href = app.appContext + '/admin/department/new/' + self.selected.id();
            } else {
                toastr.error("Bạn chưa chọn phòng ban cha", "ERR");
            }
        }

        self.editDepartment = function () {
            if (self.selected.id()) {
                location.href = app.appContext + '/admin/department/edit/' + self.selected.id();
            } else {
                toastr.error("Bạn chưa chọn phòng ban để chỉnh sửa", "ERR");
            }
        }

        self.deleteDepartment = function () {
            if (self.selected.id()) {
                if (self.selected.parentId()) {
                    pop = app.popup({
                        title: "Thông báo",
                        html: '<i class="fa fa-3x fa-warning"></i> ' + 'Bạn có chắc chắn muốn xóa phòng ban <b>' + self.selected.deptName() + '</b>',
                        width: 400,
                        buttons: [
                            {
                                name: "Đồng ý",
                                class: 'btn',
                                icon: 'fa-check',
                                action: function () {
                                    app.makePost({
                                        url: '/admin/department/delete',
                                        data: JSON.stringify(self.selected.id()),
                                        success: function (data) {
                                            if (data.success) {
                                                toastr.success("Xóa phòng ban thành công", "Thông báo");
                                                loadDepartment();
                                            } else {
                                                toastr.error("Có lỗi xảy ra", "ERR");
                                            }
                                        },
                                        error: function (err) {
                                            toastr.error("Có lỗi xảy ra", "ERR");
                                        }
                                    });
                                }
                            }
                        ]
                    });
                } else {
                    toastr.error("Bạn không thể xóa phòng ban này!", "ERR");
                }
            } else {
                toastr.error("Bạn chưa chọn phòng ban để xóa", "ERR");
            }
        }
    }


    var vm = new ViewModel();

    ko.applyBindings(vm);
});