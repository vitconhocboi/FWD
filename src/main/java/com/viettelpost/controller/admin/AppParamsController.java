package com.viettelpost.controller.admin;

import com.viettelpost.controller.BaseController;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.model.AppParams;
import com.viettelpost.model.Department;
import com.viettelpost.service.AppParamsService;
import com.viettelpost.service.BaseCustomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping(value = "/admin/app_params")
@Secured("ROLE_ADMIN")
public class AppParamsController extends BaseController<AppParams> {
    @Autowired
    AppParamsService appParamsService;

    @Override
    protected BaseCustomService<AppParams> getSevice() {
        return appParamsService;
    }

    @RequestMapping(value = "/findByParType/{parType}", method = RequestMethod.GET)
    public ResponseEntity<Object> findByParType(@PathVariable String parType) {
        List<AppParams> lst = appParamsService.findByParType(parType);
        return AppHelper.createResponseEntity(lst, lst.size(), "", true, HttpStatus.OK);
    }
}
