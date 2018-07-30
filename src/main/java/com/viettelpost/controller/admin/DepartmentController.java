package com.viettelpost.controller.admin;

import com.viettelpost.controller.BaseController;
import com.viettelpost.model.Department;
import com.viettelpost.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
@RequestMapping(value = "/department")
@Secured("ROLE_ADMIN")
public class DepartmentController extends BaseController {
    @Autowired
    DepartmentService departmentService;

    @Override
    protected String getCurrentPage() {
        return "viettelpost.page.admin.department";
    }


    @ResponseBody
    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public ResponseEntity<Object> getAllDepartment() {
        try {
            List<Department> lstDept = departmentService.getAll();
            return createResponseEntity(lstDept, lstDept.size(), "", true, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("CALL_SERVICE_ERROR", e);
        }
        return createResponseEntity(null, 0L, "Có lỗi xảy ra", false, HttpStatus.OK);
    }

}
