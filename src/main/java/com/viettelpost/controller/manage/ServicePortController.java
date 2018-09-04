package com.viettelpost.controller.manage;

import com.viettelpost.controller.BaseController;
import com.viettelpost.entity.ServicePort;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.ServicePortService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Locale;

@Controller
@RequestMapping(value = "/manage/service_port")
public class ServicePortController extends BaseController<ServicePort> {
    @Autowired
    ServicePortService servicePortService;

    @Override
    protected BaseCustomService<ServicePort> getSevice() {
        return servicePortService;
    }


    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        return "viettelpost.page.manager.service_port";
    }

    @RequestMapping(value = {"/new"}, method = RequestMethod.GET)
    public String newEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                            Locale locale, ModelMap model) {
        return "viettelpost.page.manager.service_port.addedit";
    }

    @RequestMapping(value = {"/edit/{servicePortId}"}, method = RequestMethod.GET)
    public String editEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model, @PathVariable("servicePortId") Long servicePortId) {
        model.addAttribute("servicePortId", servicePortId);
        return "viettelpost.page.manager.service_port.addedit";
    }
}
