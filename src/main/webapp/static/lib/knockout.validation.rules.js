/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var patterns = {
    email: /^([\d\w-\.]+@([\d\w-]+\.)+[\w]{2,4})?$/,
    number: ''
};

ko.validation.rules.NSWMaxLength = {
    validator: function (value, params) {
        return value.length === params;
    },
    message: 'Không được nhập vượt quá {0} ký tự'
};

ko.validation.rules.NSWMinLength = {
    validator: function (value, params) {
        return value.length >= params;
    },
    message: 'Tối thiểu bạn phải nhập {0} ký tự'
};

ko.validation.rules.NSWBetweenLength = {
    validator: function (value, params) {
        var min = params[0];
        var max = params[1];
        
        value = parseInt(value.length, 10);

        if (!isNaN(value)) {
            return value >= min && value <= max;
        }
        return false;
    },
    message: 'Số lượng ký tự nhập phải nằm trong khoảng từ {0} đến {1}'
};

ko.validation.rules.ExceedCurrentDate = {
    validator:  function (value){
        var date = Date.parse(value);
        var currentDate = new Date();
        return currentDate > date;
    },
    message: "Ngày bạn nhập không được lớn hơn ngày hiện tại"
};

ko.validation.rules.BeforeCurrentDate = {
    validator:  function (value){
        var date = Date.parse(value);
        var currentDate = new Date();
        return currentDate < date;
    },
    message: "Ngày bạn nhập không nhỏ lớn hơn ngày hiện tại"
};

ko.validation.registerExtenders();



