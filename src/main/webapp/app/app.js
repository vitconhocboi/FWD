/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var APP = function () {
};

APP.prototype = {
    isReady: false,
    version: '',
    appContext: 'MTFrontend',
    requireSigning: false,
    signerIsOnline: false,
    tmpl_cache: {},
    popupManager: null,
    config: {
        API_URL: '',
        CSRF_TOKEN_NAME: '',
        CSRF_TOKEN_VALUE: ''
    },
    generateUUID: function () {
        function _p8(s) {
            var p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
        }

        return _p8() + _p8(true) + _p8(true) + _p8();
    },
    init: function (args) {
        var self = this;

        self.config.CSRF_TOKEN_NAME = $('#csrfHeader').val();
        self.config.CSRF_TOKEN_VALUE = $('#csrfToken').val();

        if (self.config.CSRF_TOKEN_NAME === '' || self.config.CSRF_TOKEN_VALUE === '') {
            self.isReady = false;
        } else {
            self.config.API_URL = args.API_URL;
            self.isReady = true;
        }

        this.popupManager = $('body').modalmanager().data('modalmanager');
        self.appContext = args.context;
    },
    /**
     * Thuc thi HTTP POST METHOD l�n server
     * @param {[type]} url           [url]
     * @param {[type]} data          [Du lieu post]
     * @param {[type]} success     [Khi th�nh c�ng]
     * @param {[type]} error       [Khi loi]
     * @param {[type]} timeout       [Gia tri timeout neu can]
     */
    makePost: function (params) {
        $('#loading10').show();
        var self = this;
        var op = $.extend(true, {}, params);

        var onSuccess = function () {
        };
        if (op.hasOwnProperty('success')) {
            if (typeof (op.success) === 'function') {
                onSuccess = op.success;
            }
        }

        var onError = function () {
        };
        if (op.hasOwnProperty('error')) {
            if (typeof (op.error) === 'function') {
                onError = op.error;
            }
        }

        var showLoading = true;
        if (op.hasOwnProperty('showLoading')) {
            showLoading = op.showLoading;
        }

        if (showLoading) {
            self.blockUI(op);
        }
        $.ajax({
            async: true,
            type: 'POST',
            cache: false,
            crossDomain: true,
            url: self.appContext + op.url,
            data: op.data,
            contentType: "application/json; charset=utf-8",
            // dataType: "json",
            beforeSend: function (xhr) {
                // xhr.setRequestHeader('Accept', 'application/json');
                // xhr.setRequestHeader('Content-Type', 'application/json');
                // xhr.setRequestHeader(self.config.CSRF_TOKEN_NAME, self.config.CSRF_TOKEN_VALUE);
            },
            success: function (data) {
                $('#loading10').hide();
                if (showLoading) {
                    if (op.container) {
                        self.unblockUI(op.container);
                    } else {
                        self.unblockUI();
                    }
                }
                if (data.success) {
                    onSuccess(data);
                } else {
                    onError(data);
                }
            },
            error: function (x, t, m) {
                if (showLoading) {
                    $('#loading10').hide();
                    if (op.container) {
                        self.unblockUI(op.container);
                    } else {
                        self.unblockUI();
                    }
                }

                onError(x);

                if (t === 'timeout') {

                }
            },
            timeout: op.timeout !== undefined ? op.timeout : 10000
        });
    },
    /**
     * Thuc thi HTTP GET METHOD l�n server
     * @param {[type]} url              [url]
     * @param {[type]} data             [Du lieu post]
     * @param {[type]} success          [cb khi th�nh c�ng: cb(data)]
     * @param {[type]} error            [cb khi loi cb(err)]
     * @param {[type]} timeout          [timeout request]
     * @param {[type]} loading          [Co hien thi loading? (true|false), default: true]
     */
    makeGet: function (params) {

        var self = this;
        var op = $.extend(true, {}, params);

        var onSuccess = function () {
        };
        if (op.hasOwnProperty('success')) {
            if (typeof (op.success) === 'function') {
                onSuccess = op.success;
            }
        }

        var onError = function () {
        };
        if (op.hasOwnProperty('error')) {
            if (typeof (op.error) === 'function') {
                onError = op.error;
            }
        }

        var showLoading = true;
        if (op.hasOwnProperty('showLoading')) {
            showLoading = op.showLoading;
        }

        $.ajax({
            type: 'GET',
            cache: false,
            crossDomain: true,
            url: self.appContext + op.url,
            data: op.data,
            beforeSend: function (xhr) {
                //xhr.setRequestHeader('Accept', 'application/json');
                //xhr.setRequestHeader('Content-Type', 'application/json');
                // xhr.setRequestHeader(self.config.CSRF_TOKEN_NAME, self.config.CSRF_TOKEN_VALUE);
            },
            success: function (data) {
                if (showLoading) {
                    self.unblockUI();
                }
                onSuccess(data);
            },
            error: function (x, t, m) {
                if (showLoading) {
                    self.unblockUI();
                }
                onError(x);
            },
            timeout: op.timeout !== undefined ? op.timeout : 10000
        });
    },
    /**
     * Thuc thi UPLOAD FILE l�n server
     * @param {[type]} url              [url]
     * @param {[type]} data             [Du lieu post]
     * @param {[type]} success          [cb khi th�nh c�ng: cb(data)]
     * @param {[type]} error            [cb khi loi cb(err)]
     * @param {[type]} timeout          [timeout request]
     * @param {[type]} loading          [Co hien thi loading? (true|false), default: true]
     */
    uploadFile: function (obj) {
        $('#loading10').show();
        var self = this;

        var op = $.extend(true, {}, obj);

        var onSuccess = function () {
        };
        if (op.hasOwnProperty('success')) {
            if (typeof (op.success) === 'function') {
                onSuccess = op.success;
            }
        }

        var onError = function () {
        };
        if (op.hasOwnProperty('error')) {
            if (typeof (op.error) === 'function') {
                onError = op.error;
            }
        }

        var fd = new FormData();
        fd.append("file", op.file);
        fd.append("mcode", op.mcode);
        fd.append("pcode", op.pcode);

        if (op.hasOwnProperty('data')) {
            var d = op.data;
            for (var key in d) {
                if (d.hasOwnProperty(key)) {
                    fd.append(key, d[key]);
                }
            }
        }
        var url = op.hasOwnProperty('url') ? op.url : '/file/upload';

        $.ajax({
            type: 'POST',
            url: self.appContext + url,
            processData: false,
            data: fd,
            dataType: 'multipart/form-data',
            contentType: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(self.config.CSRF_TOKEN_NAME, self.config.CSRF_TOKEN_VALUE);
            },
            complete: function (e, x, s) {
                $('#loading10').hide();
                if (e.status === 200) {
                    onSuccess(JSON.parse(e.responseText));
                } else {
                    onError(JSON.parse(e.responseText));
                }
            }
        });
    },
    /**
     * Thuc thi UPLOAD FILE len server bo/nganh
     * @param {[type]} url              [url]
     * @param {[type]} data             [Du lieu post]
     * @param {[type]} success          [cb khi th�nh c�ng: cb(data)]
     * @param {[type]} error            [cb khi loi cb(err)]
     * @param {[type]} timeout          [timeout request]
     * @param {[type]} loading          [Co hien thi loading? (true|false), default: true]
     */
    wsUploadFile: function (obj) {
        $('#loading10').show();
        var self = this;

        var op = $.extend(true, {}, obj);

        var onSuccess = function () {
        };
        if (op.hasOwnProperty('success')) {
            if (typeof (op.success) === 'function') {
                onSuccess = op.success;
            }
        }

        var onError = function () {
        };
        if (op.hasOwnProperty('error')) {
            if (typeof (op.error) === 'function') {
                onError = op.error;
            }
        }

        var fd = new FormData();
        fd.append("file", op.file);

        if (op.hasOwnProperty('data')) {
            var d = op.data;
            for (var key in d) {
                if (d.hasOwnProperty(key)) {
                    fd.append(key, d[key]);
                }
            }
        }
        console.log(fd);
        var url = op.hasOwnProperty('url') ? op.url : '/file/upload';
        $.ajax({
            type: 'POST',
            url: self.appContext + url,
            processData: false,
            data: fd,
            dataType: 'multipart/form-data',
            contentType: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader(self.config.CSRF_TOKEN_NAME, self.config.CSRF_TOKEN_VALUE);
            },
            complete: function (e, x, s) {
                $('#loading10').hide();
                if (e.status === 200) {
                    onSuccess(JSON.parse(e.responseText));
                } else {
                    onError(JSON.parse(e.responseText));
                }
            }
        });
    },
    /**
     * Tao Popup
     * @param {[string]} title              [title]
     * @param {[double]} width              [width]
     * @param {[double]} height             [height]
     * @param {[string]} html               [html]
     * @param {[array]} buttons: [
     *  {name: string, action: function, class: string, icon: string}
     * ]
     * @param {function} cb description
     */
    popup: function (options, cb) {
        var self = this;
        var op = $.extend(true, {}, options);
        var popupTemp = $('#nsw-modal-templ');
        var popupHtml = popupTemp.clone().wrap('<div >').parent().html();
        var domId = this.generateUUID();

        $(popupHtml).attr('id', domId).appendTo('body');

        var w = typeof (op.width) !== 'undefined' ? op.width : -1;
        var h = typeof (op.height) !== 'undefined' ? op.height : -1;

        var popup = $('#' + domId);
        if (w > 0) {
            popup.attr('data-width', w);
        }
        if (h > 0) {
            popup.attr('data-height', h);
        }

        var html = typeof (op.html) !== 'undefined' ? op.html : '';
        var buttons = typeof (op.buttons) !== 'undefined' ? op.buttons : [];
        popup.find('.modal-body').html(html);
        popup.find('.modal-header .modal-title').html(op.title !== null ? op.title : '');

        var footer = popup.find('.modal-footer');
        var count = buttons.length;

        var button = '';
        var id = null;
        var css = null;
        var icon = null;
        var action = null;

        var click = function (i) {
            return function (e) {
                e.preventDefault();
                buttons[i].action();
                popup.modal('hide');
                return false;
            };
        };

        for (var i = 0; i < count; i++) {
            id = self.generateUUID();
            button = buttons[i];
            action = button.action;
            css = typeof button.class === 'string' ? button.class : 'btn';
            icon = typeof button.icon === 'string' ? button.icon : 'fa-check';
            footer.append($('<a id="button_' + id + '" href="javascript:void(0)" class="' + css + ' "><i class="fa fa-lg ' + icon + '"></i> ' + button.name + '</a>'));
            $('#button_' + id).on('click', click(i));
        }

        popup.modal();
        if (cb !== null && typeof cb === 'function') {
            cb(popup);
        }

        return popup;
    },
    popupRemove: function (id, cb) {
        var modals = this.popupManager.getOpenModals();
        var count = modals.length;
        var elId = null;
        var modal = null;
        for (var i = 0; i < count; i++) {
            modal = modals[i];
            elId = modal.$element.attr('id');
            if (('#' + elId) === id) {
                this.popupManager.destroyModal(modal);
                if (typeof (cb) !== 'undefined')
                    cb();
                break;
            }
        }
    },
    Alert: function (msg) {
        this.popup({
            title: NSWLang["common_msg_thongbao"],
            html: msg,
            width: 400
        });
    },
    AlertWithBtn: function (msg) {
        var popup = this.popup({
            title: "Thông báo",
            html: msg,
            width: 400,
            buttons: [
                {
                    name: "OK",
                    class: 'btn',
                    action: function () {
                        app.popupRemove(popup.selector);
                    }
                }
            ]
        });
    },
    Confirm: function (options) {
        this.popup({
            title: NSWLang["common_msg_thongbao"],
            html: options.msg,
            width: 400,
            buttons: options.buttons
        });
    },
    toast: function (options) {
        var op = $.extend(true, {
            closeButton: true,
            debug: false,
            positionClass: "toast-top-right",
            onclick: null,
            showDuration: "1000",
            hideDuration: "1000",
            timeOut: "3000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut"
        }, {timeOut: options.timeOut});

        toastr.options = op;
        var func = typeof options.function === 'string' ? options.function : 'success';
        toastr[func](options.message, options.title);
    },
    blockUI: function (options) {
        var self = this;

        var op = $.extend(true, {}, options);
        var html = '';
        if (op.animate) {
            html = '<div class="loading-message ' + (op.boxed ? 'loading-message-boxed' : '') + '">' + '<div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>' + '</div>';
        } else if (op.iconOnly) {
            html = '<div class="loading-message ' + (op.boxed ? 'loading-message-boxed' : '') + '"><img src="' + Util.getGlobalImgPath() + 'loading-spinner-grey.gif" align=""></div>';
        } else if (op.textOnly) {
            html = '<div class="loading-message ' + (op.boxed ? 'loading-message-boxed' : '') + '"><span>&nbsp;&nbsp;' + (op.message ? op.message : 'LOADING...') + '</span></div>';
        } else {
            html = '<div class="loading-message ' + (op.boxed ? 'loading-message-boxed' : '') + '"><img src="' + Util.getGlobalImgPath() + 'loading-spinner-grey.gif" align=""><span>&nbsp;&nbsp;' + (op.message ? op.message : 'LOADING...') + '</span></div>';
        }

        var parseTable = function (con, e) {
            var c = 1;

            var th = e.find('thead');
            var r;
            var tdId = self.generateUUID();

            if (th.length > 0) {
                r = $($(th[0]).find('tr')[0]);
                c = r.find('th').length;
                con.html('<tr><td style="height:50px" colspan="' + c + '" id="td_' + tdId + '"></td></tr>');
            } else {
                var trs = e.find('tr');
                if (trs.length > 0) {
                    r = $(trs[0]);
                    c = r.find('td').length;
                    con.html('<tr><td style="height:50px" colspan="' + c + '" id="td_' + tdId + '"></td></tr>');
                } else {
                    con.html('<tr><td style="height:50px" colspan="' + c + '" id="td_' + tdId + '"></td></tr>');
                }
            }

            return $('#td_' + tdId);
        };

        if (op.container) { // element blocking

            var el = $(op.container);

            if (el.is('tbody')) {
                var p = el.parent();
                el = parseTable(el, p);
            } else if (el.is('table')) {
                el = parseTable(el, el);
            } else {
            }

            if (el.height() <= ($(window).height())) {
                op.cenrerY = true;
            }

            el.block({
                message: html,
                baseZ: op.zIndex ? op.zIndex : 1000,
                centerY: op.cenrerY !== undefined ? op.cenrerY : false,
                css: {
                    top: '10%',
                    border: '0',
                    padding: '0',
                    backgroundColor: 'none'
                },
                overlayCSS: {
                    backgroundColor: op.overlayColor ? op.overlayColor : '#555',
                    opacity: op.boxed ? 0.05 : 0.1,
                    cursor: 'wait'
                }
            });
        } else { // page blocking
            $.blockUI({
                message: html,
                baseZ: op.zIndex ? op.zIndex : 1000,
                css: {
                    border: '0',
                    padding: '0',
                    backgroundColor: 'none'
                },
                overlayCSS: {
                    backgroundColor: op.overlayColor ? op.overlayColor : '#555',
                    opacity: op.boxed ? 0.05 : 0.1,
                    cursor: 'wait'
                }
            });
        }
    },
    unblockUI: function (target) {
        if (target) {
            $(target).unblock({
                onUnblock: function () {
                    $(target).css('position', '');
                    $(target).css('zoom', '');
                }
            });
        } else {
            $.unblockUI();
        }
    },
    form2JSON: function (form) {
        var a = $(form).serializeArray();
        var obj = {};
        for (var i = 0; i < a.length; i++) {
            obj[a[i].name] = a[i].value.toString().trim();
        }
        return JSON.stringify(obj);
    },
    form2Object: function (form) {
        var a = $(form).serializeArray();
        var obj = {};
        for (var i = 0; i < a.length; i++) {
            obj[a[i].name] = a[i].value.toString().trim();
        }
        return obj;
    },
    /*
     * obj {
     *  @param ministryCode:    [Ma Bo/Nganh],
     *  @param code:            [Ma thu tuc],
     *  @param templateName:    [Ten template khong bao gom phan mo rong]
     * }
     */
    getCategory: function (url, key, id, callback) {
        var self = this;
        return $.ajax({
            async: true,
            type: 'POST',
            cache: false,
            crossDomain: true,
            url: self.appContext + url + "?key=" + key + "&id=" + (id ? id : ""),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader(self.config.CSRF_TOKEN_NAME, self.config.CSRF_TOKEN_VALUE);
            },
            success: function (res) {
                callback(res);
            }
        });
    },
    parseQuerystring: function () {
        var dict = {};
        var d = window.location.href.split('?');
        if (d.length > 1) {
            var foo = d[1].split('#')[0].split('&');
            var elem = [];
            for (var i = foo.length - 1; i >= 0; i--) {
                elem = foo[i].split('=');
                dict[elem[0]] = elem[1];
            }
            ;
        }
        return dict;
    },
    serializeQuerystring: function (obj) {
        var str = [];
        for (var key in obj) {
            if (!obj[key]) {
                continue;
            }
            str.push(key + "=" + encodeURIComponent(obj[key]));
        }
        return str.join("&");
    },
    showLoading: function () {
        $('#loading10').show();
    },
    hideLoading: function () {
        $('#loading10').show();
    },

    convertFormObservableJson(form) {
        var obj = {};
        if (form instanceof File) {
            return form;
        } else if (typeof form == 'object') {
            for (const pro of Object.getOwnPropertyNames(form)) {
                var val = this.convertFormObservableJson(form[pro]);
                obj[pro] = val;
            }
            return obj;
        } else {
            if (typeof form == 'function') {
                var value = form();
                if (value && value.constructor == Array) {
                    var arr = [];
                    for (const val  of value) {
                        arr.push(this.convertFormObservableJson(val));
                    }
                    return arr;
                } else {
                    return value;
                }
            } else {
                return form;
            }
        }
    },
    convertObjectToObservable(obj, observable, typeDate) {
        if (obj == undefined) {
            return null;
        } else if (obj && obj.constructor === Array) {
            var array = [];
            // for (const it of obj) {
            //     array.push(this.convertObjectToObservable(it, observable));
            // }
            return array;
        } else if (typeof obj == 'object' && !typeDate) {
            for (const pro of Object.getOwnPropertyNames(obj)) {
                var val = this.convertObjectToObservable(obj[pro],
                    observable ? observable[pro] : undefined,
                    observable && observable.objectTypeDate && observable.objectTypeDate.indexOf(pro) >= 0);
                if (observable && ko.isObservable(observable[pro])) {
                    if (ko.isWriteableObservable(observable[pro])) {
                        observable[pro](val);
                    }
                } else if (typeof  observable[pro] == 'object') {
                    // observable[pro] = val;
                } else {
                    observable[pro] = ko.observable(val);
                }
            }
            return observable;
        } else if (typeof obj == 'function') {
            if (typeDate && obj()) {
                return new Date(obj());
            } else {
                return obj();
            }
        } else {
            if (typeDate) {
                return new Date(obj);
            } else {
                return obj;
            }
        }
    },
    cloneObject(observable, clone) {
        clone = clone || {};
        for (const pro of Object.getOwnPropertyNames(observable)) {
            if (ko.isObservable(observable[pro])) {
                clone[pro](observable[pro]());
            }
        }
        return clone;
    },
    resetObservable(observable) {
        for (const pro of Object.getOwnPropertyNames(observable)) {
            if (ko.isObservable(observable[pro])) {
                ko.observable(observable[pro](null));
            }
        }
    },
    checkValidate(object) {
        for (key in object) {
            if (ko.isObservable(object[key]) && typeof object[key].isValid === 'function' && !object[key].isValid()) {
                return false;
            } else if (typeof  object[key] == 'object' && !this.checkValidate(object[key])) {
                return false;
            }
        }
        return true;
    },
    objectToFormData(obj, form, namespace) {

        var fd = form || new FormData();
        var formKey;

        for (var property in obj) {
            if (typeof obj[property] == 'function') {
                continue;
            }
            if (namespace && obj.constructor === Array) {
                formKey = namespace + '.' + property;
            }
            else if (namespace) {
                formKey = namespace + '.' + property;
            }
            else {
                formKey = property;
            }

            // if the property is an object, but not a File,
            // use recursivity.
            if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {

                this.objectToFormData(obj[property], fd, formKey);

            } else {

                // if it's a string or a File object
                fd.append(formKey, obj[property]);
            }
        }

        return fd;

    },
    uploadMutipleFile: function (obj) {
        $('#loading10').show();
        var url = obj.hasOwnProperty('url') ? obj.url : '/file/upload';
        var self = this;
        var onSuccess = function () {
        };
        if (obj.hasOwnProperty('success')) {
            if (typeof (obj.success) === 'function') {
                onSuccess = obj.success;
            }
        }

        var onError = function () {
        };
        if (obj.hasOwnProperty('error')) {
            if (typeof (obj.error) === 'function') {
                onError = obj.error;
            }
        }
        $.ajax({
            type: 'POST',
            url: self.appContext + url,
            processData: false,
            data: app.objectToFormData(obj.data),
            dataType: 'application/json;charset=UTF-8',
            contentType: false,
            complete: function (e, x, s) {
                $('#loading10').hide();
                if (e.status === 200) {
                    onSuccess(JSON.parse(e.responseText));
                } else {
                    onError(e.responseText);
                }
            }
        });
    },
    popupWithLabel: function (options, cb) {
        var self = this;
        var op = $.extend(true, {}, options);
        var popupTemp = $('#nsw-modal-templ');
        var popupHtml = popupTemp.clone().wrap('<div>').parent().html();
        var domId = this.generateUUID();

        $(popupHtml).attr('id', domId).appendTo('body');

        var w = typeof (op.width) !== 'undefined' ? op.width : -1;
        var h = typeof (op.height) !== 'undefined' ? op.height : -1;

        var popup = $('#' + domId);
        if (w > 0) {
            popup.attr('data-width', w);
        }
        if (h > 0) {
            popup.attr('data-height', h);
        }

        var html = typeof (op.html) !== 'undefined' ? op.html : '';
        var buttons = typeof (op.buttons) !== 'undefined' ? op.buttons : [];
        popup.find('.modal-body').html(html);
        popup.find('.modal-header .modal-title').html(op.title !== null ? op.title : '');
        popup.find('.popup-label-name b').html(op.label !== null ? op.label : '');

        var footer = popup.find('.modal-footer');
        var count = buttons.length;

        var button = '';
        var id = null;
        var css = null;
        var icon = null;
        var action = null;

        var click = function (i) {
            return function (e) {
                e.preventDefault();
                buttons[i].action();
                return false;
            };
        };

        for (var i = 0; i < count; i++) {
            id = self.generateUUID();
            button = buttons[i];
            action = button.action;
            css = typeof button.class === 'string' ? button.class : 'btn';
            icon = typeof button.icon === 'string' ? button.icon : 'fa-check';
            footer.append($('<a id="button_' + id + '" href="javascript:void(0)" class="' + css + '"><i class="fa fa-lg ' + icon + '"></i> ' + button.name + '</a>'));
            $('#button_' + id).on('click', click(i));
        }

        popup.modal();
        if (cb !== null && typeof cb === 'function') {
            cb(popup);
        }

        return popup;
    },
    form2Value: function (form) {
        var a = $(form).serializeArray();
        var obj;
        for (var i = 0; i < a.length; i++) {
            obj = a[i].value.toString().trim();
        }
        return obj;
    }
};




