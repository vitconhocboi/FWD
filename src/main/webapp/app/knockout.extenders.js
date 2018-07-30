/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
ko.extenders.vndate = function (target) {
    return ko.computed({
        read: function () {
            var value = target();
            var d = new Date(value());
            var year = d.getFullYear();
            var month = ("0" + (d.getMonth() + 1)).substr(-2);
            var day = ("0" + d.getDate()).substr(-2);

            var hour = ("0" + d.getHours()).substr(-2);
            var minutes = ("0" + d.getMinutes()).substr(-2);
            var seconds = ("0" + d.getSeconds()).substr(-2);
            return  day + "/" + month + "/" + year + ' ' + hour + ':' + minutes + ':' + seconds;
        },
        write: target
    });
};

ko.extenders.vnDateShort = function (target) {
    return ko.computed({
        read: function () {
            var value = target();
            var d = new Date(value());
            var year = d.getFullYear();
            var month = ("0" + (d.getMonth() + 1)).substr(-2);
            var day = ("0" + d.getDate()).substr(-2);

            return  day + "/" + month + "/" + year ;
        },
        write: target
    });
};

ko.observableArray.fn.firstIndexOf = function (predicate, predicateOwner) {
    for (var i = 0, j = this().length; i < j; i++) {
        if (predicate.call(predicateOwner, this()[i])) {
            return i;
        }
    }
    return -1;
};

