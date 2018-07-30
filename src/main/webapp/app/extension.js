
var urlRegex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

$.fn.hasAttr = function(name) {  
   return typeof this.attr(name) !== 'undefined';
};

if (!String.prototype.trim) {
    (function() {
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
            return this.replace(rtrim, '');
        };
    })();
}

function pad(number) {
    var r = String(number);
    if (r.length === 1) {
        r = '0' + r;
    }
    return r;
};

function padComma(strNumber) {
    if (strNumber === null || (strNumber.toString()).length <= 3) {
        return strNumber;
    }
    strNumber = strNumber.toString();
    var split = strNumber.search(".") >= 0 ? strNumber.split(".") : [strNumber];
    if (split[0].length <= 3) {
        return strNumber;
    }
    var a = split[0].reverse();
    temp = a.substr(0, 3);
    padLength = 3;
    len = a.length - padLength;
    do {
        temp += ("," + a.substr(padLength, 3));
        padLength = padLength + 3;
        len = a.length - padLength;
    } while (len > 3);
    // console.log("temp ->",temp);
    // console.log("a ->",a);
    if (len > 0) {
        temp += "," + a.substr(padLength, len);
    }
    var r = temp.reverse();
    if (split.length === 1) {
        return r;
    }
    else {
        return r + "." + split[1];
    }
}

function removeComma(strNumber) {
    if (strNumber === null || strNumber === "") {
        return strNumber;
    }
    strNumber = strNumber.toString();
    if (strNumber.search(",") < 0) {
        return strNumber;
    }
    return strNumber.replace(/,/ig, "");
}

var getQueryParamAsObject = function (href) {
    if (href === null || href === "") {
        return {};
    }
    var params = JSON.parse('{"' + decodeURI(href).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    return params
};

function getParamFromUrlByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function prepareFormData(formData) {
    if (formData !== null) {
        for (var key in formData) {
            var obj = formData[key];
            if (obj !== null && typeof obj === 'object' && typeof obj.getMonth === 'function') {
                formData[key] = obj.toISOString();
            }
        }
    }
    return formData;
};

function htmlEncode(html) {
    return document.createElement('div').appendChild(document.createTextNode(html)).parentNode.innerHTML;
};

function htmlDecode(html) {
    var a = document.createElement('div'); a.innerHTML = html;
    return a.textContent;
};

function clone(obj, excludeArr) {
    if (typeof obj === 'undefined') {
        return null;
    }
    if (obj === null) {
        return obj;
    }
    if (typeof obj !== 'object' || (typeof obj === 'object' && typeof obj.getMonth === 'function')) {
        return JSON.parse(JSON.stringify(obj));
    }
    var c = obj.constructor();
    for (var key in obj) {
        if (!excludeArr || !excludeArr.indexOf(key)) {
            c[key] = obj[key];
        }
    }
    return c;
};

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
};

function specialify(text, map) {
    var temp = text.toString();
    if (!map) {
        map = {};
    }
    temp = temp.replace(/'|"|\|\n|\r|\t|\b|\f/g, function (u) {
        if (u === null || u === "") {
            return u;
        }
        var g = guid();
        map["" + g] = u;
        return g;
    });
    // console.log("temp -> ", temp);
    return temp;
};

function urlify(text, map) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    if (!map) {
        map = {};
    }
    return text.replace(urlRegex, function (url) {
        var g = guid();
        map["" + g] = url;
        return g;
    });
};

function urlifyToArray(text) {
    return text.replace(urlRegex, function (url) {
        return '","' + encodeURI(url) + '","';
    });
};

function isUri(text) {
    return urlRegex.test(text);
}

function splitStringByUri(text) {
    // console.log(text);
    if (text === null || text.trim() === "") {
        return [];
    }
    text = text.trim();
    var reg = new RegExp('([a-zA-Z\d]+://)?((\w+:\w+@)?([a-zA-Z\d.-]+\.[A-Za-z]{2,4})(:\d+)?(/.*)?)', 'i');
    // n?u text không ch? url thì b? qua luôn
    if (!reg.test(text)) {
        var result = [];
        result.push(text);
        return result;
    }
    var umap = {};
    html = urlify(text, umap);
    var smap = {};
    var html = specialify(html, smap);

    for (var key in umap) {
        html = html.replace(key, umap[key]);
    }
    html = urlifyToArray(html).trim();
    if (html.endsWith(',"')) {
        html = html.substring(0, html.length - 2);
    }
    if (html.startsWith('","')) {
        html = html.substring(3, html.length);
    }
    if (html.endsWith('"')) {
        html = html.substring(0, html.length - 1);
    }
    html = '["' + html + '"]';
    var htmlJson = JSON.parse(html);
    for (var i = 0; i < htmlJson.length; i++) {
        htmlJson[i] = decodeURI(htmlJson[i]);
        for (var key in smap) {
            htmlJson[i] = htmlJson[i].replace(key, smap[key]);
        }
    }
    return htmlJson;
};

String.prototype.splitStringByUri = function () {
    return splitStringByUri(this);
};

String.prototype.isUri = function () {
    return isUri(this);
};

String.prototype.toValidDate = function () {
    var that = this;
    var arr = that.split('/');
    return pad(arr[1]) + "/" + pad(arr[0]) + "/" + pad(arr[2]);
};

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

String.prototype.startsWith = function (str) {
    return this.indexOf(str) === 0;
};

String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.isValid = function () {
    var s = this;
    return (s == null || s.length === 0 || s == '-1');
};

String.prototype.searchWithOutAlias = function (term) {
    term = changeAlias(term);
    return (changeAlias(this)).search(term);
};

String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

Array.prototype.Search = function (att, id) {
    var that = this;
    var length = that.length;
    var index = -1;
    if(length == 0) return index;
    
    for (var i = 0; i < length; i++) {
        if (that[i][att] == id) {
            index = i;
            break;
        }
    }
    return index;
};

Array.prototype.getArray = function (att, val) {
    var that = this;
    var length = that.length;
    var destArr = [];
    if(length == 0) return destArr;    
    for (var i = 0; i < length; i++) {        
        if (that[i][att] == val) {
            destArr.push(that[i]);
        }
    }
    return destArr;
};

Array.prototype.getArrayAndNotExitsInOther = function (att, val, att2, arr2) {
    var that = this;
    var length = that.length;
    var destArr = [];
    if(length == 0) return destArr;
    var d = null;
    for (var i = 0; i < length; i++) {
        if (that[i][att] == val) {
            d = that[i][att2];
            if(d === null || arr2.Search(att2, d) === -1)
                destArr.push(that[i]);
        }
    }

    return destArr;
};

Array.prototype.countAllItems = function () {
    if (!this || this.length === 0) {
        return 0;
    }
    var total = 0;
    for (var i = 0; i < this.length; i++) {
        if (!isNaN(this[i])) {
            total += (this[i] - 0);
        }
    }
    return total;
};

Date.prototype.toDayFirstString = function () {    
    var date = this;
    var str = pad(date.getDate()) + "/" + pad(date.getMonth() + 1) + "/" + pad(date.getYear() + 1900);
    if (str === '01/01/1970')
        return 'N/A';
    return str;
};

Date.prototype.toDayFirstWithTime = function () {
    var date = this;
    var str = pad(date.getDate()) + "/" + pad(date.getMonth() + 1) + "/" + pad(date.getYear() + 1900) + " " + pad(date.getHours()) + ":" + pad(date.getMinutes());
    return str;
},

Date.prototype.toTimeString = function () {
    var date = this;
    var str = pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds());
    return str;
},

Date.prototype.toISOString = function () {
    return this.getUTCFullYear()
        + '-' + pad(this.getUTCMonth() + 1)
        + '-' + pad(this.getUTCDate())
        + 'T' + pad(this.getUTCHours())
        + ':' + pad(this.getUTCMinutes())
        + ':' + pad(this.getUTCSeconds())
        + 'Z';
};

Date.prototype.getMonday = function () {
    if (this === null) return this;
    var d = this;
    var day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
};

Date.prototype.getSunday = function () {
    if (this === null) return this;
    var d = this;
    d = d.getMonday();
    return new Date(d.getTime() + 1000 * 60 * 60 * 24 * 6);
};

Date.prototype.getStartOfMonth = function () {
    return new Date(this.getFullYear(), this.getMonth(), 1);
};

Date.prototype.getEndOfMonth = function () {
    var after = new Date(this.getFullYear(), this.getMonth() + 1, 1);
    return after.addDate(-1);
};

Date.prototype.addDate = function (numberOfDay) {
    if (this === null) return this;
    var d = this;
    return new Date(d.getTime() + 1000 * 60 * 60 * 24 * numberOfDay);
};

Date.prototype.yesterday = function () {
    var raw = this.addDate(-1);
    return raw.startOfDay();
};

Date.prototype.endOfDay = function () {
    this.setHours(23);
    this.setMinutes(59);
    this.setSeconds(59);
    this.setMilliseconds(999);
    return this;
};

Date.prototype.startOfDay = function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
};

Date.prototype.compareWithNow = function () {
    var rt = 0;
    var now = new Date();
    return this.getTime() - now.getTime();    
};