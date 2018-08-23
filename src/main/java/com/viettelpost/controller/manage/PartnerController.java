package com.viettelpost.controller.manage;

import com.viettelpost.constant.AppConstant;
import com.viettelpost.controller.BaseController;
import com.viettelpost.entity.DebtManagement;
import com.viettelpost.entity.Partner;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.DebtManagementService;
import com.viettelpost.service.PartnerSevice;
import org.springframework.beans.factory.annotation.Autowired;
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
import java.util.Locale;

@Controller
@RequestMapping(value = "/manage/partner")
public class PartnerController extends BaseController<Partner> {
    @Autowired
    PartnerSevice partnerSevice;

    @Autowired
    DebtManagementService debtManagementService;

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
    public String newEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                            Locale locale, ModelMap model) {
        return "viettelpost.page.manager.partner.addedit";
    }

    @RequestMapping(value = {"/edit/{partnerId}"}, method = RequestMethod.GET)
    public String editEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model, @PathVariable("partnerId") Long partnerId) {
        model.addAttribute("partnerId", partnerId);
        return "viettelpost.page.manager.partner.addedit";
    }

    @Override
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody Partner object) {
        ResponseEntity response = super.save(object);
        if (debtManagementService.findFirstByObjectDebtIdAndType(object.getPartnerId(), AppConstant.FINANCE_TYPE.PARTNER) == null) {
            DebtManagement debtManagement = new DebtManagement();
            debtManagement.setObjectDebtId(object.getPartnerId());
            debtManagement.setObjectDebtName(object.getPartnerName());
            debtManagement.setAmount(0D);
            debtManagement.setType(AppConstant.FINANCE_TYPE.PARTNER);
            try {
                debtManagementService.save(debtManagement);
            } catch (Exception e) {
                LOGGER.error(e.getMessage(), e);
            }
        }

        return response;
    }
}
