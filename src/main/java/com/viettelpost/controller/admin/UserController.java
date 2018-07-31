package com.viettelpost.controller.admin;

import com.google.gson.Gson;
import com.viettelpost.constant.AppConstant;
import com.viettelpost.controller.BaseController;
import com.viettelpost.model.Breadcrumb;
import com.viettelpost.model.Page;
import com.viettelpost.model.User;
import com.viettelpost.model.UserCustom;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Controller
@RequestMapping(value = "/admin/user")
public class UserController extends BaseController<User> {
    @Autowired
    UserService userService;

    @Override
    protected BaseCustomService<User> getSevice() {
        return userService;
    }

    @Override
    public String getCurrentPage() {
        return "viettelpost.page.admin.user";
    }


    @RequestMapping(value = {"/new"}, method = RequestMethod.GET)
    public String newUser(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                          Locale locale, ModelMap model) {
        try {
            Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            if (principal instanceof UserDetails) {
                UserCustom user = (UserCustom) principal;
                Page page = checkRolePages(user.getLstPages(), request.getServletPath());
                if (page != null) {
                    List<Breadcrumb> breadcrumbs = new ArrayList<>();
                    Breadcrumb nav = new Breadcrumb(page.getPageUrl(), page.getPageName());
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

        return "viettelpost.page.admin.newuser";
    }

    @RequestMapping(value = {"/edit/{userId}"}, method = RequestMethod.GET)
    public String editUser(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                           Locale locale, ModelMap model, @PathVariable("userId") Long userId) {
        try {
            Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            if (principal instanceof UserDetails) {
                UserCustom user = (UserCustom) principal;
                Page page = checkRolePages(user.getLstPages(), request.getServletPath());
                if (page != null) {
                    List<Breadcrumb> breadcrumbs = new ArrayList<>();
                    Breadcrumb nav = new Breadcrumb(page.getPageUrl(), page.getPageName());
                    breadcrumbs.add(nav);
                    model.addAttribute(AppConstant.Common.BREADCRUMB, breadcrumbs);
                    model.addAttribute(AppConstant.DanhMuc.Menu, getMenuData());
                    model.addAttribute(AppConstant.DanhMuc.UserName, user.getUsername());
                    model.addAttribute(AppConstant.DanhMuc.Version, AppConstant.getVersion());
                    Gson gson = new Gson();
                    model.addAttribute("userCustom", gson.toJson(user));
                    model.addAttribute("userId", userId);
                } else {
                    return "viettelpost.page.accessdenied";
                }

            } else {
                return AppConstant.redirectPage(AppConstant.Pages.LOGOUT);
            }

        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        }

        return "viettelpost.page.admin.newuser";
    }
}
