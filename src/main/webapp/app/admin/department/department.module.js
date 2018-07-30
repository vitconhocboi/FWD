window.onload = function () {
    function ViewModel() {
        var self = this;
        self.danhsachphongban;
        self.selected = {
            id: ko.observable(),
            deptName: ko.observable(),
            deptType: ko.observable(),
            parentId: ko.observable(),
            parentName: ko.observable(),
            deptPath: ko.observable()
        }

        self.treeOption = ko.observable({});

        app.makeGet({
            url: '/department/getAll',
            success: function (data) {
                if (data.success) {
                    self.danhsachphongban = data.data;
                    buildTree(self.danhsachphongban);
                } else {
                    toastr.error("Có lỗi xảy ra", "ERR");
                }
            },
            error: function (err) {
                toastr.error("Có lỗi xảy ra", "ERR");
            }
        });

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
                    debugger
                    self.selected.id(item.id);
                    self.selected.deptName(item.deptName);
                    self.selected.deptType(item.deptType);
                    self.selected.parentId(item.parentId);
                    self.selected.deptPath(item.deptPath);
                    self.selected.parentName(item.parentName);
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



    }

    ko.bindingHandlers.dialogcmd = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            $(element).button().click(function () {
                var options = ko.utils.unwrapObservable(valueAccessor());
                $('#' + options.id).dialog(options.cmd || 'open');
            });
        }
    };

    var jQueryWidget = function (element, valueAccessor, name, constructor) {
        var options = ko.utils.unwrapObservable(valueAccessor());
        var $element = $(element);
        setTimeout(function () {
            constructor($element, options)
        }, 0);
        //$element.data(name, $widget);

    };

    ko.bindingHandlers.dialog = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            console.log("init");
            jQueryWidget(element, valueAccessor, 'dialog', function ($element, options) {
                console.log("Creating dialog on " + $element);
                return $element.dialog(options);
            });
        }
    };


    var vm = new ViewModel();

    ko.applyBindings(vm);
};