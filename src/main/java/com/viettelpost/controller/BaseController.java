/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.viettelpost.controller;

import com.google.gson.Gson;
import com.viettelpost.constant.AppConstant;
import com.viettelpost.controller.json.ResponseJson;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.model.Breadcrumb;
import com.viettelpost.model.Page;
import com.viettelpost.model.UserCustom;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/**
 * @author PhongNguyen
 */
public abstract class BaseController {
    protected static final Logger LOGGER = LoggerFactory.getLogger(BaseController.class);

    @Autowired
    protected MessageSource messageSource;
    @Autowired
    private ServletContext servletContext;
    @Autowired
    private HttpSession httpSession;

    protected abstract String getCurrentPage();

    public Page checkRolePages(List<Page> lst, String url) {
        for (Page tab : lst) {
            if (url.equalsIgnoreCase(tab.getPageUrl())) {
                return tab;
            }
        }
        return null;
    }


    public List<Page> getMenuData() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Page> mTabs = null;
        if (principal instanceof UserDetails) {
            UserCustom user = (UserCustom) principal;
            if (httpSession.getAttribute(AppConstant.MENU_SESSION) != null) {
                mTabs = (List<Page>) httpSession.getAttribute(AppConstant.MENU_SESSION);
            } else {
                mTabs = AppHelper.getMenusForUser(user.getLstPages());
                httpSession.setAttribute(AppConstant.MENU_SESSION, mTabs);
            }
        }
        return mTabs;
    }

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        try {
            Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            if (principal instanceof UserDetails) {
                UserCustom user = (UserCustom) principal;
                Page page = checkRolePages(user.getLstPages(), request.getServletPath());
                if (page != null) {
                    List<Breadcrumb> breadcrumbs = new ArrayList<>();
                    Breadcrumb nav = new Breadcrumb(request.getServletPath(), page.getPageName());
                    breadcrumbs.add(nav);
                    model.addAttribute(AppConstant.Common.BREADCRUMB, breadcrumbs);
                    model.addAttribute(AppConstant.DanhMuc.Menu, getMenuData());
                    model.addAttribute(AppConstant.DanhMuc.UserName, user.getUsername());
                    model.addAttribute(AppConstant.DanhMuc.Version, AppConstant.getVersion());
                    Gson gson = new Gson();
                    model.addAttribute("userCustom", gson.toJson(user));
                } else {
                    return "viettelpost.page.accessdenied";
                }

            } else {
                return AppConstant.redirectPage(AppConstant.Pages.LOGOUT);
            }

        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        }

        return getCurrentPage();
    }

    protected ResponseEntity<Object> createResponseEntity(Object data, Number total, String message, boolean success,
                                                          HttpStatus httpStatus) {

        ResponseJson item = new ResponseJson();

        item.setData(data);

        item.setTotal(total);

        item.setMessage(message);

        item.setSuccess(success);

        return new ResponseEntity<>(item, httpStatus);
    }
}
