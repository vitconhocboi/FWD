package com.viettelpost.controller.finance;

import com.viettelpost.constant.AppConstant;
import com.viettelpost.entity.DebtDetail;
import com.viettelpost.entity.DebtManagement;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.model.RefundDebt;
import com.viettelpost.service.DebtDetailService;
import com.viettelpost.service.DebtManagementService;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.DefaultMultipartHttpServletRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.InputStream;
import java.util.*;

@Controller
@RequestMapping(value = "/finance/debt_manager")
public class DebtManagementController {
    protected static final Logger LOGGER = LoggerFactory.getLogger(DebtManagementController.class);

    @Autowired
    DebtManagementService debtManagementService;

    @Autowired
    DebtDetailService debtDetailService;

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        return "viettelpost.page.finance.debt.manage";
    }

    @RequestMapping(value = {"/refund/{debtId}", ""}, method = RequestMethod.GET)
    public String refund(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                         Locale locale, ModelMap model, @PathVariable("debtId") Long debtId) {
        DebtManagement debt = debtManagementService.findById(debtId);
        model.addAttribute("debtId", debtId);
        model.addAttribute("objectDebtId", debt.getObjectDebtId());
        model.addAttribute("objectDebtName", debt.getObjectDebtName());
        model.addAttribute("financeType", debt.getType());
        String title = "";
        if (debt.getType() == 0) {
            title = "Gạch nợ cho nhân viên - " + debt.getObjectDebtName();
        } else if (debt.getType() == 1) {
            title = "Gạch nợ cho khách hàng - " + debt.getObjectDebtName();
        } else if (debt.getType() == 2) {
            title = "Gạch nợ cho đối tác - " + debt.getObjectDebtName();
        }
        model.addAttribute("title", title);
        return "viettelpost.page.finance.debt.refund";
    }

    @ResponseBody
    @RequestMapping(value = "/searchPaging", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Object> searchPaging(HttpServletRequest request, @RequestBody Map<String, Object> object) {
        try {
            List lst = debtManagementService.searchPaging(object);
            Long total = debtManagementService.getTotalRecord(object);
            return AppHelper.createResponseEntity(lst, total, "", true, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
            return AppHelper.createResponseEntity(null, 1, "Có lỗi xảy ra", false, HttpStatus.OK);
        }
    }

    @ResponseBody
    @RequestMapping(value = "/detail/{debtId}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Object> getDetailByDebtId(HttpServletRequest request, @PathVariable("debtId") Long debtId, @RequestBody Map<String, Object> object) {
        try {
            object.put("debtId", debtId);
            List lst = debtDetailService.searchPaging(object);
            return AppHelper.createResponseEntity(lst, lst.size(), "", true, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
            return AppHelper.createResponseEntity(null, 1, "Có lỗi xảy ra", false, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/saveRefund/{debtId}", method = RequestMethod.POST)
    public ResponseEntity<Object> getDetailByDebtId(DefaultMultipartHttpServletRequest request, @PathVariable("debtId") Long debtId) {
        try {
            Map<String, Object> object = new HashMap<>();
            AppHelper.convertFormDataToMap(object, request.getParameterMap());
            Map<String, InputStream> files = new HashMap<>();
            for (String key : request.getFileMap().keySet()) {
                if (!request.getParameterMap().containsKey(key)) {
                    files.put(key, request.getFileMap().get(key).getInputStream());
                }
            }
            AppHelper.convertFormDataToMap(object, files);

            RefundDebt refundDebt = AppHelper.setObjectPropertyValue(object, RefundDebt.class);

            DebtDetail debtDetail = new DebtDetail();
            debtDetail.setDebtId(debtId);
            debtDetail.setObjectDebtId(refundDebt.getObjectDebtId());
            debtDetail.setObjectDebtName(refundDebt.getObjectDebtName());
            debtDetail.setStatus(1L);
            debtDetail.setUserCreateId(debtDetailService.getCurrentUserModel().getUserId());
            debtDetail.setCreatedDate(new Date());

            if (refundDebt.getFinanceType() == AppConstant.FINANCE_TYPE.MEMBER) {
                if (refundDebt.getRefundType() == AppConstant.REFUND_TYPE.CASH) {
                    debtDetail.setAmount(refundDebt.getAmount());
                    debtDetail.setPaymentType(AppConstant.FINANCE_PAYMENT_TYPE.REFUND);
                    debtDetailService.save(debtDetail);
                    debtManagementService.updateAmountDebt(debtDetail.getDebtId(), debtDetail.getAmount());
                } else if (refundDebt.getRefundType() == AppConstant.REFUND_TYPE.INVOICE) {
                    // gach no cho doi tac
                    Double amountTotal = 0D;
                    for (DebtDetail debt : refundDebt.getListRefund()) {
                        debt.setUserCreateId(debtDetailService.getCurrentUserModel().getUserId());
                        debt.setCreatedDate(new Date());
                        amountTotal += debt.getAmount();
                        debtDetailService.save(debt);
                        debtManagementService.updateAmountDebt(debt.getDebtId(), debt.getAmount());
                    }
                    //gach no cho nhan vien
                    debtDetail.setPaymentType(AppConstant.FINANCE_PAYMENT_TYPE.REFUND);
                    debtDetail.setAmount(amountTotal);
                    debtDetailService.save(debtDetail);
                    debtManagementService.updateAmountDebt(debtDetail.getDebtId(), debtDetail.getAmount());
                }
            } else if (refundDebt.getFinanceType() == AppConstant.FINANCE_TYPE.CUSTOMER) {
                debtDetail.setPaymentType(AppConstant.FINANCE_PAYMENT_TYPE.COLLECTED);
                debtDetail.setAmount(refundDebt.getAmount());
                debtDetailService.save(debtDetail);
                debtManagementService.updateAmountDebt(debtDetail.getDebtId(), debtDetail.getAmount());
            } else if (refundDebt.getFinanceType() == AppConstant.FINANCE_TYPE.PARTNER) {
                // gach no cho doi tac
                for (DebtDetail debt : refundDebt.getListRefund()) {
                    debt.setUserCreateId(debtDetailService.getCurrentUserModel().getUserId());
                    debt.setCreatedDate(new Date());
                    debtDetailService.save(debt);
                    debtManagementService.updateAmountDebt(debt.getDebtId(), -debt.getAmount());
                }
            }
            return AppHelper.createResponseEntity(null, 0, "", true, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
            return AppHelper.createResponseEntity(null, 1, "Có lỗi xảy ra", false, HttpStatus.OK);
        }
    }
}
