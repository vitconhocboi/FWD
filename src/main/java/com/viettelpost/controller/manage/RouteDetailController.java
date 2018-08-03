package com.viettelpost.controller.manage;

import com.viettelpost.controller.BaseController;
import com.viettelpost.model.RouteDetail;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.RouteDetailService;
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

@RequestMapping(value = "/manage/route")
@Controller
public class RouteDetailController extends BaseController<RouteDetail> {
    @Autowired
    RouteDetailService routeDetailService;

    @Override
    protected BaseCustomService<RouteDetail> getSevice() {
        return routeDetailService;
    }

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        return "viettelpost.page.manager.route";
    }

    @RequestMapping(value = {"/new"}, method = RequestMethod.GET)
    public String newPort(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                          Locale locale, ModelMap model) {
        return "viettelpost.page.manager.route.addedit";
    }

    @RequestMapping(value = {"/edit/{routeId}"}, method = RequestMethod.GET)
    public String editPort(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                           Locale locale, ModelMap model, @PathVariable("routeId") Long routeId) {
        model.addAttribute("routeId", routeId);
        return "viettelpost.page.manager.route.addedit";
    }
}
