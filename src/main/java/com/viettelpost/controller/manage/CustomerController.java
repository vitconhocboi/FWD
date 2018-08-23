package com.viettelpost.controller.manage;

import com.viettelpost.constant.AppConstant;
import com.viettelpost.controller.BaseController;
import com.viettelpost.entity.Customer;
import com.viettelpost.entity.DebtManagement;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.CustomerService;
import com.viettelpost.service.DebtManagementService;
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
@RequestMapping(value = "/manage/customer")
public class CustomerController extends BaseController<Customer> {
    @Autowired
    CustomerService customerService;

    @Autowired
    DebtManagementService debtManagementService;

    @Override
    protected BaseCustomService<Customer> getSevice() {
        return customerService;
    }

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        return "viettelpost.page.manager.customer";
    }

    @RequestMapping(value = {"/new"}, method = RequestMethod.GET)
    public String newEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                            Locale locale, ModelMap model) {
        return "viettelpost.page.manager.customer.addedit";
    }

    @RequestMapping(value = {"/edit/{customerId}"}, method = RequestMethod.GET)
    public String editEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model, @PathVariable("customerId") Long customerId) {
        model.addAttribute("customerId", customerId);
        return "viettelpost.page.manager.customer.addedit";
    }

    @Override
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody Customer object) {
        ResponseEntity response = super.save(object);
        if (debtManagementService.findFirstByObjectDebtIdAndType(object.getCustomerId(), AppConstant.FINANCE_TYPE.CUSTOMER) == null) {
            DebtManagement debtManagement = new DebtManagement();
            debtManagement.setObjectDebtId(object.getCustomerId());
            debtManagement.setObjectDebtName(object.getCustomerName());
            debtManagement.setAmount(0D);
            debtManagement.setType(AppConstant.FINANCE_TYPE.CUSTOMER);
            try {
                debtManagementService.save(debtManagement);
            } catch (Exception e) {
                LOGGER.error(e.getMessage(), e);
            }
        }

        return response;
    }
}
