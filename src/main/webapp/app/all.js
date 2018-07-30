/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Handlebars.registerHelper('getJsonContext', function (data, options) {
    return options.fn(JSON.parse(data));
});

Handlebars.registerHelper("toDateTime", function (d) {
    var d = new Date(d);
    return d.toDayFirstString();
});

Handlebars.registerHelper("toDateTimeFullTime", function (d) {
    var d = new Date(d);
    return d.toDayFirstWithTime();
});

Handlebars.registerHelper("_lang", function (key) {
    return NSWLang[key];
});

Handlebars.registerHelper("inc", function (value, options) {
    return parseInt(value) + 1;
});

Handlebars.registerHelper("yesno", function (v) {
    if (v == 1)
        return NSWLang["common_co"];
    else
        return NSWLang["common_khong"]
});

Handlebars.registerHelper("fixSelectData", function (d) {
    if (d == null || (d != null && d.length == 0))
        return -1;
    else
        return d;
});

Handlebars.registerHelper("convertToDateFromTimeStamp", function (d, showtime) {
    if (d === null || typeof(d) === 'undefined' || (d !== null && d.length === 0))
        return '';
    else {
        if (!(d.toString().indexOf('/') >= 0)) {
            var date = new Date(d);
            var year = date.getFullYear();
            var month = ("0" + (date.getMonth() + 1)).substr(-2);
            var day = ("0" + date.getDate()).substr(-2);
            
            var hour = ("0" + date.getHours()).substr(-2);
            var minutes = ("0" + date.getMinutes()).substr(-2);
            var seconds = ("0" + date.getSeconds()).substr(-2);
            
            if(!showtime) {
                return  day + "/" + month + "/" + year;
            } else {
                return  day + "/" + month + "/" + year + ' ' + hour + ':' + minutes + ':' + seconds;
            }
        } else {
            return d;
        }
    }
});

Handlebars.registerHelper('compare', function (v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

Handlebars.registerHelper('compareInArray', function (v1, arr, options) {
    var a = JSON.parse(arr);
    if (a.indexOf(v1) >= 0) {
        return options.fn(this);
    }
    return options.inverse(this);
});

Handlebars.registerHelper('safeString', function (text) {
    text = Handlebars.Utils.escapeExpression(text);
    return new Handlebars.SafeString(text);
});

Handlebars.registerHelper('buildDownloadUrl', function (minister, propcode, guid, id) {
    if(parseInt(id) > 0) {
        return context + '/file/download/' + guid + '/' + id;
    } else {
        return context + '/file/getfile/' + minister + '/' + propcode + '/' + guid;
    }
});

Handlebars.registerHelper('getContext', function () {
    return context;
});
