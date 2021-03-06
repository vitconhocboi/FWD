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

        public static final String BREADCRUMB = "breadcrumbs";
    }

    public interface Breadcrumb {

        public static final String HOME = "viettelpost.breadcrumb.home";
        public static final String LIST = "viettelpost.breadcrumb.list";
        public static final String DETAIL = "viettelpost.breadcrumb.detail";
    }

    public interface DateTime {

        public static final String yyyyMMddhhmmss = "yyyyMMddhhmmss";
    }

    public interface Pages {

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
        public static final String UserId = "userId";
    }

    public interface Display {

        public static final String Hide = "none";
        public static final String Show = " ";
        public static final String HideImportName = "hideImport";
        public static final String IsView = "IsView";
    }


    public interface ORDER_STATUS {
        public static final String NEW = "0";
        public static final String PRICE_CS = "1";
        public static final String PRICE_OP = "2";
        public static final String PROFIT = "3";
        public static final String PROCESS = "4";
        public static final String SALE_PROCESS = "5";
        public static final String PENDING = "6";
        public static final String DONE = "7";
        public static final String CLOSE = "8";
        public static final String SALE_CONFIRM = "9";
        public static final String WAIT_DESTROY = "10";
        public static final String DESTROY = "-1";
    }

    public interface FINANCE_STATUS {
        public static final Long WAIT = 0L;
        public static final Long ACCEPTED = 1L;
        public static final Long DENIED = -1L;
    }

    public interface FINANCE_PAYMENT_TYPE {
        public static final Long BORROW = 0L;
        public static final Long REFUND = 1L;
        public static final Long RECEIVABLE = 2L;
        public static final Long COLLECTED = 3L;
        public static final Long PAYABLE = 4L;
        public static final Long PAID = 5L;
    }

    public interface FINANCE_TYPE {
        public static final Long MEMBER = 0L;
        public static final Long CUSTOMER = 1L;
        public static final Long PARTNER = 2L;
    }

    public interface REFUND_TYPE {
        public static final Long CASH = 0L;
        public static final Long INVOICE = 1L;
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
