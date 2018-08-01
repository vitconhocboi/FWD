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
import com.viettelpost.model.Department;
import com.viettelpost.model.Page;
import com.viettelpost.model.UserCustom;
import com.viettelpost.service.BaseCustomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Map;

/**
 * @author PhongNguyen
 */
public abstract class BaseController<T> {
    protected static final Logger LOGGER = LoggerFactory.getLogger(BaseController.class);

    @Autowired
    protected MessageSource messageSource;
    @Autowired
    private ServletContext servletContext;
    @Autowired
    private HttpSession httpSession;

    protected abstract BaseCustomService<T> getSevice();

    protected ResponseEntity<Object> createResponseEntity(Object data, Number total, String message, boolean success,
                                                          HttpStatus httpStatus) {

        ResponseJson item = new ResponseJson();

        item.setData(data);

        item.setTotal(total);

        item.setMessage(message);

        item.setSuccess(success);

        return new ResponseEntity<>(item, httpStatus);
    }

    @ResponseBody
    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public ResponseEntity<Object> getAllDepartment() {
        try {
            List<T> lst = getSevice().getAll();
            return createResponseEntity(lst, lst.size(), "", true, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("CALL_SERVICE_ERROR", e);
        }
        return createResponseEntity(null, 0L, "Có lỗi xảy ra", false, HttpStatus.OK);
    }

    @ResponseBody
    @RequestMapping(value = "/getById/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getObjectById(@PathVariable("id") Long id) {
        try {
            T object = getSevice().findById(id);
            return createResponseEntity(object, 1, "", true, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("CALL_SERVICE_ERROR", e);
        }
        return createResponseEntity(null, 0L, "Có lỗi xảy ra", false, HttpStatus.OK);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody T object) {
        try {
            object = getSevice().save(object);
            return createResponseEntity(object, 1, "", true, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
            //pushLog(e, getClass());
            return createResponseEntity(null, 1, "Có lỗi xảy ra", false, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<Object> delete(@RequestBody Long id) {
        try {
            getSevice().delete(id);
            return createResponseEntity("", 1, "", true, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
            return createResponseEntity(null, 1, "Có lỗi xảy ra", false, HttpStatus.OK);
        }
    }

    @ResponseBody
    @RequestMapping(value = "/search", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Object> search(HttpServletRequest request, @RequestBody Map<String, Object> object) {
        try {
            List lst = getSevice().search(object);
            return createResponseEntity(lst, lst.size(), "", true, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
            //pushLog(e, getClass());
            return createResponseEntity(null, 1, "Có lỗi xảy ra", false, HttpStatus.OK);
        }
    }

    @ResponseBody
    @RequestMapping(value = "/searchPaging", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Object> searchPaging(HttpServletRequest request, @RequestBody Map<String, Object> object) {
        try {
            List lst = getSevice().searchPaging(object);
            Long total = getSevice().getTotalRecord(object);
            return createResponseEntity(lst, total, "", true, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
            //pushLog(e, getClass());
            return createResponseEntity(null, 1, "Có lỗi xảy ra", false, HttpStatus.OK);
        }
    }
}
