
var Util = {
    context: '',
    extensions: ['.jpg', '.png', '.tif', '.pdf'],
    assetsConfig: {
        assetsPath: '/static/assets/',
        globalImgPath: 'global/img/'
    },
    getGlobalImgPath: function () {
        return this.context + this.assetsConfig.assetsPath + this.assetsConfig.globalImgPath;
    },
    validateAttachByDom: function (elId, exts) {
        var fileAttach = $('#' + elId);
        var extLimited = this.extensions;
        if (exts !== null && typeof (exts) !== 'undefined') {
            extLimited = exts;
        }

        var oneMb = 1048576;
        var maxFileNameLength = 200;
        if (fileAttach.val() === '') {
            alert(NSWLang['file_msg_chua_chon_file']);
            fileAttach.focus();
            return false;
        }

        var file = null;
        var files = fileAttach[0].files;

        var totalSizes = parseInt($('#fiTotalFileSize').attr('value'));
        var oldSize = totalSizes + 0;
        for (var i = 0, len = files.length; i < len; i++) {
            var file = files[i];

            var ext = '.' + file.name.split('.').pop().trim();
            if (file.name.trim().length > maxFileNameLength) {
                alert(NSWLang['file_msg_tenvuotmaxlength'].format(maxFileNameLength));
                return false;
            }

            if (extLimited.indexOf(ext.toLowerCase()) === -1) {
                alert(NSWLang['file_msg_file_duoc_phep_tai_len'].format(': ' + extLimited.join(', ')));
                return false;
            }

            if (file.size > oneMb * 1) {
                alert(NSWLang['file_msg_dung_luong_toi_da'].format(1));
                return false;
            }

            oldSize = parseInt(oldSize, 10) + parseInt(file.size, 10);
        }
        if (oldSize > oneMb * 5) {
            $('#fiTotalFileSize').attr('value', totalSizes);
            alert(NSWLang['file_msg_tong_dung_luong_toi_da'].format(2));
            return false;
        } else {
            $('#fiTotalFileSize').attr('value', oldSize);
        }

        return true;
    },
    
    validateFieExtensionWithoutDom: function (files, exts) {
        var extLimited = this.extensions;
        if (exts !== null && typeof (exts) !== 'undefined') {
            extLimited = exts;
        }

        var maxFileNameLength = 200;
        var file = null;

        for (var i = 0, len = files.length; i < len; i++) {
            var file = files[i];

            var ext = '.' + file.name.split('.').pop().trim();
            if (file.name.trim().length > maxFileNameLength) {
                alert(NSWLang['file_msg_tenvuotmaxlength'].format(maxFileNameLength));
                return false;
            }

            if (extLimited.indexOf(ext.toLowerCase()) === -1) {
                alert(NSWLang['file_msg_file_duoc_phep_tai_len'].format(': ' + extLimited.join(', ')));
                return false;
            }
        }
        return true;
    },
    
    uploadFileNameValidate: function (fileName) {
        var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
        if (pattern.test(fileName)) {
            alert('Tên file đính kèm không được chứa ký tự đặc biệt như: ~,",#,%,&,*,:,>,<,?,/,\,{,|,}');
            return false;
        } else {
            return true;
        }
    },

    validateExtension: function (fileName) {
        var extFile = '.' + fileName.split('.').pop().trim();
        var extLimited = this.extensions;
        if (extLimited.indexOf(extFile.toLowerCase()) === -1) {
            alert(NSWLang['file_msg_file_duoc_phep_tai_len'].format(': ' + extLimited.join(', ')));
            return false;
        }
        return true;
    },

    //validate without checking file size
    validateFieExtensionByDom: function (elId, exts) {
        var fileAttach = $('#' + elId);
        var extLimited = this.extensions;
        if (exts !== null && typeof (exts) !== 'undefined') {
            extLimited = exts;
        }

        var maxFileNameLength = 200;
        if (fileAttach.val() === '') {
            alert(NSWLang['file_msg_chua_chon_file']);
            fileAttach.focus();
            return false;
        }

        var file = null;
        var files = fileAttach[0].files;

        for (var i = 0, len = files.length; i < len; i++) {
            var file = files[i];

            var ext = '.' + file.name.split('.').pop().trim();
            if (file.name.trim().length > maxFileNameLength) {
                alert(NSWLang['file_msg_tenvuotmaxlength'].format(maxFileNameLength));
                return false;
            }

            if (extLimited.indexOf(ext.toLowerCase()) === -1) {
                alert(NSWLang['file_msg_file_duoc_phep_tai_len'].format(': ' + extLimited.join(', ')));
                return false;
            }
        }
        return true;
    },

    validateAttachByFile: function (file) {
        var oneMb = 1048576;

        var ext = file.name.split('.').pop();

        if (this.extensions.indexOf(ext.toLowerCase()) === -1) {
            alert(NSWLang['file_msg_file_duoc_phep_tai_len'].format(': ' + this.extensions.join(', ')));
            return false;
        }

        if (file.size > oneMb) {
            alert(NSWLang['file_msg_dung_luong_toi_da'].format(1));
            return false;
        }

        return true;
    },
    getYearFromVNDate: function (d) {
        if (d === null)
            return '';
        var y = d.split('/').pop();
        return y;
    },
    isNumeric: function (n) {
        if (n !== '') {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        return true;
    },
    isValidFloat: function (value) {
        var numbers = /^[-+]?[0-9]+$/;
        var RE = /^\d*(\.\d{1})?\d{0,3}$/;
        var val = parseFloat(value.trim());
        if (!value.trim().match(numbers) && !RE.test(value)) {
            return false;
        }
        if (val < 0) {
            return false;
        }
        if (val > 999999999999.9999) {
            return false;
        }

        return true;
    },
    convertToDateTime: function (d, showtime) {
        if (d === null || typeof (d) === 'undefined' || (d !== null && d.length === 0))
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

                if (!showtime) {
                    return  day + "/" + month + "/" + year;
                } else {
                    return  day + "/" + month + "/" + year + ' ' + hour + ':' + minutes + ':' + seconds;
                }
            } else {
                return d;
            }
        }
    },
    getErrorMsg: function (e) {
        var errorCode = e.error;
        var errorMsg = NSWLang[errorCode];
        var sheetName = '';

        if (e.sheetName !== null)
            sheetName = NSWLang['common_excel_sheet_' + e.sheetName.toLowerCase()];

        var r = e.excelRow;
        var c = e.excelCol;
        var msg = '';
        var fname = '';

        var elm = null;

        if (errorCode !== 'CODE5') {
            elm = $('#' + e.fieldName);
            if (elm.length > 0) {
                if (elm.hasAttr('field')) {
                    fname = elm.attr('field');
                }
            }
        }

        switch (errorCode) {
            case 'CODE0':
                msg = NSWLang[e.fieldName];
                break;
            case 'CODE1':
            case 'CODE2':
            case 'CODE3':
                var temp = fname;
                if (typeof NSWLang[fname] !== 'undefined') {
                    temp = NSWLang[fname];
                }

                if (c > 0 && r > 0) {
                    msg = NSWLang['common_excel_msg_loidong'] + ' ' + r + NSWLang['common_excel_msg_loicot'] + ' ' + c + NSWLang['common_excel_msg_sheet'] + ' ' + sheetName + '. ' + temp + ' ' + errorMsg;
                } else {
                    msg = NSWLang['common_excel_msg_loidong'] + ' ' + r + ' ' + NSWLang['common_excel_msg_sheet'] + ' ' + sheetName + '. ' + temp + ' ' + errorMsg;
                }
                break;
            case 'CODE4':// Loi gia tri datetime khong duoc nho hon ngay hien tai
                if (c > 0 && r > 0) {
                    msg = NSWLang['common_excel_msg_loidong'] + ' ' + r + NSWLang['common_excel_msg_loicot'] + ' ' + c + NSWLang['common_excel_msg_sheet'] + ' ' + sheetName + '. ' + NSWLang[fname] + ' <b>' + NSWLang['common_msg_khongnhohon'] + '</b> ' + NSWLang['common_msg_ngayhientai'];
                } else {
                    msg = NSWLang[fname] + ' <b>' + NSWLang['common_msg_khongnhohon'] + '</b> ' + NSWLang['common_msg_ngayhientai'];
                }
                break;
            case 'CODE5':// Loi gia tri datetime1 khong duoc nho hon datetime2
                var fields = e.fieldName.split(':');
                var fname1, fname2;
                var elm1 = $('#' + fields[0]);
                if (elm1.length > 0) {
                    if (elm1.hasAttr('field')) {
                        fname1 = elm1.attr('field');
                    }
                }
                var elm2 = $('#' + fields[1]);
                if (elm2.length > 0) {
                    if (elm2.hasAttr('field')) {
                        fname2 = elm2.attr('field');
                    }
                }
                msg = NSWLang[fname1] + ' <b>' + NSWLang['common_msg_khongnhohon'] + '</b> ' + NSWLang[fname2];
                break;
            default:
                errorMsg = NSWLang['CODE2'];
                msg = sheetName + ' ' + errorMsg;
                break;
        }

        return msg;
    }
    ,
    isDate: function (date) {
        var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        var regs = date.match(reg);
        if (regs) {
            return true;
        } else {
            return false;
        }
    },
    //dd/mm/yyyy
    getDate: function (date) {
        var re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
        var regs = date.match(re);
        if (regs) {
            // day value between 1 and 31
            if (regs[1] < 1 || regs[1] > 31) {
                return null;
            }
            // month value between 1 and 12
            if (regs[2] < 1 || regs[2] > 12) {
                return null;
            }

        } else {
            return null;
        }

        return new Date(regs[3], regs[2] - 1, regs[1]);
    },
    /**
     * 
     * @param {type} d1
     * @param {type} d2
     * @returns 1: d1 > d2; 0: d1 = d2; -1: d1 < d2
     */
    compareDate: function (d1, d2) {
        var arr1 = d1.split('/');
        var arr2 = d2.split('/');
        //Year
        if (parseInt(arr1[2]) > parseInt(arr2[2])) {
            return 1;
        }
        if (parseInt(arr1[2]) < parseInt(arr2[2])) {
            return -1;
        }

        //Month
        if (parseInt(arr1[0]) > parseInt(arr2[0])) {
            return 1;
        }
        if (parseInt(arr1[0]) < parseInt(arr2[0])) {
            return -1;
        }

        //Day
        if (parseInt(arr1[1]) > parseInt(arr2[1])) {
            return 1;
        }
        if (parseInt(arr1[1]) < parseInt(arr2[1])) {
            return -1;
        }

        return 0;
    },
    //array.sort(sortBy('x', true|false, fnc: parseInt|custom func...))
    //https://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
    sortBy: function (field, reverse, primer) {
        var key = function (x) {
            return primer ? primer(x[field]) : x[field];
        };

        return function (a, b) {
            var A = key(a), B = key(b);
            return ((A < B) ? -1 : ((A > B) ? 1 : 0)) * [-1, 1][+!!reverse];
        };
    },
    getParameterByName: function (name, url) {
        if (!url)
            url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    boDauTiengViet: function (str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        // str = str.replace(/\W+/g, ' ');
        // str = str.replace(/\s/g, '-');
        return str;
    }
};

var JsPaginate = {
    take: function (n, list) {
        return list.slice(0, n);
    },
    drop: function (n, list) {
        return list.slice(n);
    },
    concat: function (lists) {
        return Array.prototype.concat.apply(this, lists);
    },
    divide: function (n, list) {
        if (list.length) {
            var head = this.take(n, list);
            var tail = this.drop(n, list);
            return this.concat.call([head], [this.divide(n, tail)]);
        } else {
            return [];
        }
    },
    paginate: function (n, list) {
        return this.divide(n, list).map(function (items, index) {
            var number = n * index;
            return {
                start: number + 1,
                end: number + items.length,
                items: items
            };
        });
    },
    appendChildren: function (element, children) {
        element.innerHTML = '';
        children.forEach(function (child) {
            element.appendChild(child);
        });
    },
    buildPage: function (c, pages, cb) {

        this.appendChildren(c, pages.map(function (page, index) {
            var button = document.createElement("button");
            button.setAttribute("class", "btn");
            button.addEventListener("click", display);
            button.innerHTML = index + 1;
            return button;

            function display() {
                cb(page.items);
            }
        }));
    }

};
