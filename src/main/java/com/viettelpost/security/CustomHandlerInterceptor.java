package com.viettelpost.security;

import com.google.gson.Gson;
import com.viettelpost.constant.AppConstant;
import com.viettelpost.controller.BaseController;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.model.Breadcrumb;
import com.viettelpost.model.Page;
import com.viettelpost.model.UserCustom;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CustomHandlerInterceptor extends HandlerInterceptorAdapter {
    protected static final Logger LOGGER = LoggerFactory.getLogger(CustomHandlerInterceptor.class);

    private List<String> urlByPass = Arrays.asList("/", "", "/noaccess",
            "/updateUserInfo", "/saveUserInfo",
            "/swagger-resources/configuration/ui",
            "/swagger-resources", "/v2/api-docs");

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        try {
            Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

            if (principal instanceof UserDetails && !urlByPass.contains(request.getServletPath())) {

                UserCustom user = (UserCustom) principal;
                Page page = checkRolePages(user.getLstPages(), request.getServletPath());
                if (page != null) {
                    if (modelAndView != null) {
                        List<Breadcrumb> breadcrumbs = new ArrayList<>();
                        Breadcrumb nav = new Breadcrumb(page.getPageUrl(), page.getPageName());
                        breadcrumbs.add(nav);
                        ModelMap model = modelAndView.getModelMap();
                        model.addAttribute(AppConstant.Common.BREADCRUMB, breadcrumbs);
                        model.addAttribute(AppConstant.DanhMuc.Menu, ((UserCustom) principal).getLstMenu());
                        model.addAttribute(AppConstant.DanhMuc.UserName, user.getUsername());
                        model.addAttribute(AppConstant.DanhMuc.Version, AppConstant.getVersion());
                    }
                } else {
                    response.sendRedirect("/noaccess");
                }
            }
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        }
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        try {
            Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

            if (principal instanceof UserDetails && !urlByPass.contains(request.getServletPath())) {

                UserCustom user = (UserCustom) principal;
                Page page = checkRolePages(user.getLstPages(), request.getServletPath());
                if (page == null) {
                    response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                    response.getOutputStream().print("You are not authorized to access this resource");
                    return false;
                }
            }
        } catch (Exception e) {
            return false;
        }
        return super.preHandle(request, response, handler);
    }

    private Page checkRolePages(List<Page> lst, String url) {
        for (Page tab : lst) {
            if (url.startsWith(tab.getPageUrl())) {
                return tab;
            }
        }
        return null;
    }
}
