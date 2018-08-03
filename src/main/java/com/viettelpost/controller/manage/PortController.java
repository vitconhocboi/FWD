package com.viettelpost.controller.manage;

import com.viettelpost.controller.BaseController;
import com.viettelpost.model.Port;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.PortService;
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
@RequestMapping(value = "/manage/port")
public class PortController extends BaseController<Port> {
    @Autowired
    PortService portService;

    @Override
    protected BaseCustomService<Port> getSevice() {
        return portService;
    }


    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        return "viettelpost.page.manager.port";
    }

    @RequestMapping(value = {"/new"}, method = RequestMethod.GET)
    public String newPort(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                          Locale locale, ModelMap model) {
        return "viettelpost.page.manager.port.addedit";
    }

    @RequestMapping(value = {"/edit/{portId}"}, method = RequestMethod.GET)
    public String editPort(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                           Locale locale, ModelMap model, @PathVariable("portId") Long portId) {
        model.addAttribute("portId", portId);
        return "viettelpost.page.manager.port.addedit";
    }

}
