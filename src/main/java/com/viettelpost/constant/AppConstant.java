/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.viettelpost.constant;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * @author PhongNguyen
 */
public class AppConstant {
    public static final String MENU_SESSION = "MENU";

    public interface Common {

        public static final String APPLET = "viettelpost.applet.path";
        public static final String ISSIGN = "viettelpost.sign";
        public static final String COMMONURL = "viettelpost.common.url";
        public static final String BREADCRUMB = "breadcrumbs";
        public static final String FILESERVICES = "viettelpost.file.services.url";
    }

    public interface Breadcrumb {

        public static final String HOME = "viettelpost.breadcrumb.home";
        public static final String LIST = "viettelpost.breadcrumb.list";
        public static final String DETAIL = "viettelpost.breadcrumb.detail";
    }

    public interface DateTime {

        public static final String yyyyMMddhhmmss = "yyyyMMddhhmmss";
    }

    public interface API {

        public static final String viettelpost_API_TOKHAI = "viettelpost.api.tokhai";
        public static final String viettelpost_API_DSHQ = "viettelpost.api.danhsachhq";
    }

    public interface  Pages {

        public static final String HOME = "viettelpost.page.home";
        public static final String LOGIN = "viettelpost.page.login";
        public static final String LOGOUT = "login?logout";
        public static final String ERROR = "viettelpost.page.error";
        public static final String ACCESSDINED = "viettelpost.page.accessdenied";
        public static final String NOTFOUND = "viettelpost.page.notfound";
        public static final String TESTCA = "viettelpost.page.testca";
    }

    public interface ControllerURI {
        public static final String ROOT = "/";
        public static final String HOME = "/home";
        public static final String INDEX = "/index";
        public static final String LOGIN = "/login";
        public static final String LOGOUT = "/logout";
        public static final String NOACCESS = "/noaccess";
        public static final String ERROR = "/error";
        public static final String NOTFOUND = "/notfound";

        public static final String CATEST = "/ca";
    }

    public interface DanhMuc {
        public static final String Menu = "tabs";
        public static final String UserName = "loggedinuser";
        public static final String Version = "version";
        public static final String User = "user";
    }

    public interface Display {

        public static final String Hide = "none";
        public static final String Show = " ";
        public static final String HideImportName = "hideImport";
        public static final String IsView = "IsView";
    }

    public static String redirectPage(String pageName) {
        return "redirect:/" + pageName;
    }

    public static String getVersion() {
        SimpleDateFormat formatter = new SimpleDateFormat(AppConstant.DateTime.yyyyMMddhhmmss);
        Date today = Calendar.getInstance().getTime();
        return formatter.format(today);
    }
}
