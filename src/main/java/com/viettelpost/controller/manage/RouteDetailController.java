package com.viettelpost.controller.manage;

import com.viettelpost.controller.BaseController;
import com.viettelpost.entity.RouteDetail;
import com.viettelpost.entity.ServicePort;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.RouteDetailService;
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
    public String newEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                            Locale locale, ModelMap model) {
        return "viettelpost.page.manager.route.addedit";
    }

    @RequestMapping(value = {"/edit/{routeId}"}, method = RequestMethod.GET)
    public String editEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model, @PathVariable("routeId") Long routeId) {
        model.addAttribute("routeId", routeId);
        return "viettelpost.page.manager.route.addedit";
    }

    @Override
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody RouteDetail object) {
        Map<String, Object> map = new HashMap<>();
        map.put("portOfDepartureId", object.getPortOfDepartureId());
        map.put("portOfDestinationId", object.getPortOfDestinationId());
        map.put("serviceId", object.getServiceId());
        map.put("partnerId", object.getPartnerId());
        List<RouteDetail> lst = routeDetailService.search(map);
        if (lst != null && !lst.isEmpty()) {
            return AppHelper.createResponseEntity(object, 1, "Bản ghi đã tồn tại!", false, HttpStatus.OK);
        }
        return super.save(object);
    }
}
