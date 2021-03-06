package com.viettelpost.controller.manage;

import com.viettelpost.controller.BaseController;
import com.viettelpost.entity.Service;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.model.Price;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Locale;

@Controller
@RequestMapping(value = "/manage/service")
public class ServiceController extends BaseController<Service> {
    @Autowired
    ServiceService serviceService;

    @Override
    protected BaseCustomService<Service> getSevice() {
        return serviceService;
    }


    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        return "viettelpost.page.manager.service";
    }

    @RequestMapping(value = {"/new"}, method = RequestMethod.GET)
    public String newEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                            Locale locale, ModelMap model) {
        return "viettelpost.page.manager.service.addedit";
    }

    @RequestMapping(value = {"/edit/{serviceId}"}, method = RequestMethod.GET)
    public String editEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model, @PathVariable("serviceId") Long serviceId) {
        model.addAttribute("serviceId", serviceId);
        return "viettelpost.page.manager.service.addedit";
    }

    @RequestMapping(value = "/searchPartnerByService/{serviceId}", method = RequestMethod.GET)
    public ResponseEntity<Object> searchPartnerByService(@PathVariable("serviceId") Long serviceId) {
        List<Price> lst = serviceService.searchPartnerByService(serviceId);
        return AppHelper.createResponseEntity(lst, lst.size(), "", true, HttpStatus.OK);
    }

}
