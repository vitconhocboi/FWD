package com.viettelpost.controller.admin;

import com.viettelpost.constant.AppConstant;
import com.viettelpost.controller.BaseController;
import com.viettelpost.entity.DebtManagement;
import com.viettelpost.entity.User;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.DebtManagementService;
import com.viettelpost.service.UserService;
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
@RequestMapping(value = "/admin/user")
public class UserController extends BaseController<User> {
    @Autowired
    UserService userService;

    @Override
    protected BaseCustomService<User> getSevice() {
        return userService;
    }

    @Autowired
    DebtManagementService debtManagementService;


    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        return "viettelpost.page.admin.user";
    }


    @RequestMapping(value = {"/new"}, method = RequestMethod.GET)
    public String newEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                            Locale locale, ModelMap model) {
        return "viettelpost.page.admin.newuser";
    }

    @RequestMapping(value = {"/edit/{userId}"}, method = RequestMethod.GET)
    public String editEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model, @PathVariable("userId") Long userId) {
        model.addAttribute("userId", userId);
        return "viettelpost.page.admin.newuser";
    }

    @Override
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody User object) {
        ResponseEntity response = super.save(object);
        if (debtManagementService.findFirstByObjectDebtIdAndType(object.getUserId(), AppConstant.FINANCE_TYPE.PARTNER) == null) {
            DebtManagement debtManagement = new DebtManagement();
            debtManagement.setObjectDebtId(object.getUserId());
            debtManagement.setObjectDebtName(object.getFullName());
            debtManagement.setAmount(0D);
            debtManagement.setType(AppConstant.FINANCE_TYPE.MEMBER);
            try {
                debtManagementService.save(debtManagement);
            } catch (Exception e) {
                LOGGER.error(e.getMessage(), e);
            }
        }

        return response;
    }
}
