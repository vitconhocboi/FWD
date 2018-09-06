package com.viettelpost.controller.manage;

import com.viettelpost.controller.BaseController;
import com.viettelpost.entity.ServicePort;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.ServicePortService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

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

    @Override
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody ServicePort object) {
        Map<String, Object> map = new HashMap<>();
        map.put("serviceId", object.getServiceId());
        map.put("partnerId", object.getPartnerId());
        map.put("portId", object.getPortId());
        List<ServicePort> lst = servicePortService.search(map);
        if (lst != null && !lst.isEmpty()) {
            return AppHelper.createResponseEntity(object, 1, "Bản ghi đã tồn tại!", false, HttpStatus.OK);
        }
        return super.save(object);
    }
}
