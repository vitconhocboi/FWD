package com.viettelpost.controller.admin;

import com.google.gson.Gson;
import com.viettelpost.constant.AppConstant;
import com.viettelpost.controller.BaseController;
import com.viettelpost.model.Breadcrumb;
import com.viettelpost.model.Department;
import com.viettelpost.model.Page;
import com.viettelpost.model.UserCustom;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;


@Controller
@RequestMapping(value = "/admin/department")
@Secured("ROLE_ADMIN")
public class DepartmentController extends BaseController<Department> {
    @Autowired
    DepartmentService departmentService;

    @Override
    protected String getCurrentPage() {
        return "viettelpost.page.admin.department";
    }

    @Override
    protected BaseCustomService<Department> getSevice() {
        return departmentService;
    }

    @RequestMapping(value = {"/edit/{id}", ""}, method = RequestMethod.GET)
    public String editDepartment(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                                 Locale locale, ModelMap model, @PathVariable("id") Long id) {
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
                    model.addAttribute("departmentId", id);
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

        return "viettelpost.page.admin.department.edit";
    }

    @RequestMapping(value = {"/new/{parentId}", ""}, method = RequestMethod.GET)
    public String newDepartment(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                                Locale locale, ModelMap model, @PathVariable("parentId") Long parentId) {
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
                    model.addAttribute("parentId", parentId);
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

        return "viettelpost.page.admin.department.edit";
    }

}
