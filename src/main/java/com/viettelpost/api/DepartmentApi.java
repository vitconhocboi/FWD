package com.viettelpost.api;

import com.viettelpost.controller.json.ResponseJson;
import com.viettelpost.model.Department;
import com.viettelpost.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/api/department")
public class DepartmentApi {
    @Autowired
    DepartmentService departmentService;

    @ResponseBody
    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public ResponseEntity<Object> getAllDepartment() {
        try {
            List<Department> lstDept = departmentService.getAll();
            return createResponseEntity(lstDept, lstDept.size(), "", true, HttpStatus.OK);
        } catch (Exception e) {
        }
        return createResponseEntity(null, 0L, "Có lỗi xảy ra", false, HttpStatus.OK);
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
