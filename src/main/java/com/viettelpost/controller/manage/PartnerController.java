package com.viettelpost.controller.manage;

import com.viettelpost.controller.BaseController;
import com.viettelpost.model.Partner;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.PartnerSevice;
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
@RequestMapping(value = "/manage/partner")
public class PartnerController extends BaseController<Partner> {
    @Autowired
    PartnerSevice partnerSevice;

    @Override
    protected BaseCustomService<Partner> getSevice() {
        return partnerSevice;
    }

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        return "viettelpost.page.manager.partner";
    }

    @RequestMapping(value = {"/new"}, method = RequestMethod.GET)
    public String newPartner(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model) {
        return "viettelpost.page.manager.partner.addedit";
    }

    @RequestMapping(value = {"/edit/{partnerId}"}, method = RequestMethod.GET)
    public String newPartner(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model, @PathVariable("partnerId") Long partnerId) {
        model.addAttribute("partnerId", partnerId);
        return "viettelpost.page.manager.partner.addedit";
    }
}
