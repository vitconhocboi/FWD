package com.viettelpost.controller.finance;

import com.viettelpost.constant.AppConstant;
import com.viettelpost.controller.BaseController;
import com.viettelpost.entity.DebtDetail;
import com.viettelpost.entity.DebtManagement;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.DebtDetailService;
import com.viettelpost.service.DebtManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Controller
@RequestMapping(value = "/finance/advance_payment")
public class AdvancePaymentController extends BaseController<DebtDetail> {

    @Autowired
    DebtDetailService debtDetailService;

    @Autowired
    DebtManagementService debtManagementService;

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        return "viettelpost.page.finances.advance.payment";
    }

    @RequestMapping(value = {"/new"}, method = RequestMethod.GET)
    public String newEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                            Locale locale, ModelMap model) {
        model.put("fullName", debtDetailService.getCurrentUserModel().getFullName());
        return "viettelpost.page.finances.advance.payment.addedit";
    }

    @RequestMapping(value = {"/edit/{debtDetailId}"}, method = RequestMethod.GET)
    public String editEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model, @PathVariable("debtDetailId") Long debtDetailId) {
        model.put("fullName", debtDetailService.getCurrentUserModel().getFullName());
        model.addAttribute("debtDetailId", debtDetailId);
        return "viettelpost.page.finances.advance.payment.addedit";
    }

    @ResponseBody
    @RequestMapping(value = "/search", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Object> search(HttpServletRequest request, @RequestBody Map<String, Object> object) {
        if (!debtDetailService.checkRole("ROLE_ADMIN", "ROLE_FINANCE")) {
            object.put("objectDebtId", debtDetailService.getCurrentUserModel().getUserId());
        }
        object.put("paymentType", AppConstant.FINANCE_PAYMENT_TYPE.BORROW);
        List lst = debtDetailService.searchPaging(object);
        return AppHelper.createResponseEntity(lst, lst.size(), "", true, HttpStatus.OK);
    }


    @Override
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody DebtDetail object) {
        if (object.getId() != null) {
            object.setUserUpdateId(debtDetailService.getCurrentUserModel().getUserId());
            object.setUpdatedDate(new Date());
        } else {
            DebtManagement debtManagement = debtManagementService.findFirstByObjectDebtIdAndType(debtDetailService.getCurrentUserModel().getUserId(), AppConstant.FINANCE_TYPE.MEMBER);
            object.setDebtId(debtManagement.getId());
            object.setObjectDebtId(debtDetailService.getCurrentUserModel().getUserId());
            object.setObjectDebtName(debtDetailService.getCurrentUserModel().getFullName());
            object.setDebtId(debtManagement.getId());
            object.setPaymentType(AppConstant.FINANCE_PAYMENT_TYPE.BORROW);
            object.setStatus(AppConstant.FINANCE_STATUS.WAIT);
            object.setUserCreateId(debtDetailService.getCurrentUserModel().getUserId());
            object.setCreatedDate(new Date());
        }
        return super.save(object);
    }

    @RequestMapping(value = "/approve/{debtDetailId}", method = RequestMethod.POST)
    public ResponseEntity<Object> approve(@PathVariable("debtDetailId") Long debtDetailId, @RequestBody String flow) {
        DebtDetail debtDetail = debtDetailService.findById(debtDetailId);
        if (debtDetail != null && AppConstant.FINANCE_STATUS.WAIT.equals(debtDetail.getStatus())) {
            if (debtDetailService.checkRole("ROLE_ADMIN", "ROLE_FINANCE")) {
                if ("APPROVE".equals(flow)) {
                    debtDetail.setStatus(AppConstant.FINANCE_STATUS.ACCEPTED);
                    super.save(debtDetail);
                    //cap nhat cong no tong
                    debtManagementService.updateAmountDebt(debtDetail.getDebtId(), -debtDetail.getAmount());
                } else if ("DENY".equals(flow)) {
                    debtDetail.setStatus(AppConstant.FINANCE_STATUS.DENIED);
                    super.save(debtDetail);
                }
            } else {
                if ("DENY".equals(flow) && debtDetailService.getCurrentUserModel().getUserId().equals(debtDetail.getObjectDebtId())) {
                    debtDetail.setStatus(AppConstant.FINANCE_STATUS.DENIED);
                    super.save(debtDetail);
                }
            }
            return AppHelper.createResponseEntity(null, 1, "", true, HttpStatus.OK);
        } else {
            return AppHelper.createResponseEntity(null, 1, "You are not authorized to access this resource!", false, HttpStatus.FORBIDDEN);
        }
    }

    @Override
    protected BaseCustomService<DebtDetail> getSevice() {
        return debtDetailService;
    }
}
