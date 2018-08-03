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
import org.springframework.web.bind.annotation.*;
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

//    @Override
//    protected String getCurrentPage() {
//        return "viettelpost.page.admin.department";
//    }

    @Override
    protected BaseCustomService<Department> getSevice() {
        return departmentService;
    }

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        return "viettelpost.page.admin.department";
    }

    @RequestMapping(value = {"/edit/{id}", ""}, method = RequestMethod.GET)
    public String editEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model, @PathVariable("id") Long id) {
        model.addAttribute("departmentId", id);
        return "viettelpost.page.admin.department.edit";
    }

    @RequestMapping(value = {"/new/{parentId}", ""}, method = RequestMethod.GET)
    public String newEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                            Locale locale, ModelMap model, @PathVariable("parentId") Long parentId) {
        model.addAttribute("parentId", parentId);
        return "viettelpost.page.admin.department.edit";
    }

    @Override
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody Department object) {
        if (object.getId() == null) {
            object.setId(departmentService.getSequenceByName("dept_seq"));
        }
        String parentDeptPath = "";
        if (object.getParentId() != null) {
            Department parent = departmentService.findById(object.getParentId());
            parentDeptPath = parent.getDeptPath();
        }
        object.setDeptPath(parentDeptPath + object.getId() + "_");
        return super.save(object);
    }
}
