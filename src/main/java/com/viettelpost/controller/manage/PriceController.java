package com.viettelpost.controller.manage;

import com.viettelpost.controller.BaseController;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.model.Price;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.PriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping(value = "/manage/price")
public class PriceController extends BaseController<Price> {
    @Autowired
    PriceService priceService;

    @Override
    protected BaseCustomService<Price> getSevice() {
        return priceService;
    }

    @RequestMapping(value = "/findByServiceId/{serviceId}", method = RequestMethod.GET)
    public ResponseEntity<Object> findByServiceId(@PathVariable("serviceId") Long serviceId) {
        List<Price> lstPrice = priceService.findByServiceId(serviceId);
        return AppHelper.createResponseEntity(lstPrice, lstPrice.size(), "", true, HttpStatus.OK);
    }
}
