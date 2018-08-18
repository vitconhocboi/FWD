package com.viettelpost.controller.orders;

import com.viettelpost.constant.AppConstant;
import com.viettelpost.controller.BaseController;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.entity.*;
import com.viettelpost.model.ProcessOrder;
import com.viettelpost.model.SaveRevenue;
import com.viettelpost.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Controller
@RequestMapping(value = "/orders/manage")
public class OrderManageController extends BaseController<Orders> {
    @Autowired
    OrdersService ordersService;

    @Autowired
    DepartmentService departmentService;

    @Autowired
    OrderDetailService orderDetailService;

    @Autowired
    AppParamsService appParamsService;


    @Override
    protected BaseCustomService<Orders> getSevice() {
        return ordersService;
    }

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String index(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model) {
        return "viettelpost.page.orders.manage";
    }

    @RequestMapping(value = {"/new"}, method = RequestMethod.GET)
    public String newEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                            Locale locale, ModelMap model) {
        if (ordersService.checkRole("ROLE_SALE") || ordersService.checkRole("ROLE_ADMIN")) {
            return "viettelpost.page.orders.manage.addedit";
        } else {
            return "viettelpost.page.accessdenied";
        }
    }

    @RequestMapping(value = {"/edit/{orderId}"}, method = RequestMethod.GET)
    public String editEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model, @PathVariable("orderId") Long orderId) {
        Orders orders = ordersService.findById(orderId);
        if ((ordersService.checkRole("ROLE_SALE") || ordersService.checkRole("ROLE_ADMIN")) && orders != null && AppConstant.ORDER_STATUS.NEW.equals(orders.getStatus())) {
            model.addAttribute("orderId", orderId);
            return "viettelpost.page.orders.manage.addedit";
        } else {
            return "viettelpost.page.accessdenied";
        }
    }

    @RequestMapping(value = {"/view/{orderId}"}, method = RequestMethod.GET)
    public String view(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                       Locale locale, ModelMap model, @PathVariable("orderId") Long orderId) {
        model.addAttribute("orderId", orderId);
        return "viettelpost.page.orders.manage.view";
    }

    @RequestMapping(value = {"/price/{orderId}"}, method = RequestMethod.GET)
    public String price(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                        Locale locale, ModelMap model, @PathVariable("orderId") Long orderId) {
        Orders orders = ordersService.findById(orderId);
        if (orders != null && ((ordersService.checkRole("ROLE_ADMIN"))
                || (ordersService.checkRole("ROLE_OP") && AppConstant.ORDER_STATUS.PRICE_OP.equals(orders.getStatus()))
                || (ordersService.checkRole("ROLE_CS") && AppConstant.ORDER_STATUS.PRICE_CS.equals(orders.getStatus())))) {
            model.addAttribute("orderId", orderId);
            model.addAttribute("currentUserId", ordersService.getCurrentUserModel().getUserId());
            return "viettelpost.page.orders.manage.price";
        } else {
            return "viettelpost.page.accessdenied";
        }
    }

    @RequestMapping(value = {"/profit/{orderId}"}, method = RequestMethod.GET)
    public String profit(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                         Locale locale, ModelMap model, @PathVariable("orderId") Long orderId) {
        Orders orders = ordersService.findById(orderId);
        if (orders != null && ((ordersService.checkRole("ROLE_ADMIN"))
                || (ordersService.checkRole("ROLE_SALE") && AppConstant.ORDER_STATUS.PROFIT.equals(orders.getStatus())))) {
            model.addAttribute("orderId", orderId);
            return "viettelpost.page.orders.manage.profit";
        } else {
            return "viettelpost.page.accessdenied";
        }
    }

    @Override
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody Orders object) {
        if (ordersService.checkRole("ROLE_SALE") || ordersService.checkRole("ROLE_ADMIN")) {
            if (object.getOrderId() != null) {
                Orders check = ordersService.findById(object.getOrderId());
                if (check == null || !AppConstant.ORDER_STATUS.NEW.equals(check.getStatus())) {
                    return AppHelper.createResponseEntity(null, 1, "You are not authorized to access this resource!", false, HttpStatus.FORBIDDEN);
                }
            }

            SimpleDateFormat sdf = new SimpleDateFormat("ddMMYY");
            if (object.getOrderId() == null) {
                Long orderId = ordersService.getSequenceByName("order_seq");
                object.setOrderId(orderId);
                object.setOrderNo("LOG_" + sdf.format(new Date()) + "_" + String.format("%06d", orderId));
                object.setCreatedDate(new Date());
                User currentUser = ordersService.getCurrentUserModel();
                object.setUserSaleId(currentUser.getUserId());
                object.setUserName(currentUser.getUserName());
                object.setStatus("0");
                Department dept = departmentService.findById(currentUser.getDeptId());
                object.setDeptId(dept.getId());
                object.setDeptCode(dept.getUnitCode());
                object.setDeptName(dept.getDeptName());

                List<AppParams> lstOrderParams = appParamsService.findByParType("FWD_RATE");

                for (AppParams param : lstOrderParams) {
                    if ("PROFIT_ORDER".equals(param.getParCode())) {
                        object.setRateOrderThreshold(Float.valueOf(param.getParValue()));
                    } else if ("PROFIT_CONTRACT".equals(param.getParCode())) {
                        object.setRateContractThreshold(Float.valueOf(param.getParValue()));
                    } else if ("FUND_SALE".equals(param.getParCode())) {
                        object.setRateSaleThreshold(Float.valueOf(param.getParValue()));
                    } else if ("FUND_CS".equals(param.getParCode())) {
                        object.setRateCsThreshold(Float.valueOf(param.getParValue()));
                    } else if ("FUND_OP".equals(param.getParCode())) {
                        object.setRateOpThreshold(Float.valueOf(param.getParValue()));
                    }
                }
            } else {
                object.setUpdatedDate(new Date());
            }
            return super.save(object);
        } else {
            return AppHelper.createResponseEntity(null, 1, "You are not authorized to access this resource!", false, HttpStatus.FORBIDDEN);
        }
    }

    @Override
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<Object> delete(@RequestBody Long id) {
        if (ordersService.checkRole("ROLE_SALE") || ordersService.checkRole("ROLE_ADMIN")) {
            return super.delete(id);
        } else {
            return AppHelper.createResponseEntity(null, 1, "You are not authorized to access this resource!", false, HttpStatus.FORBIDDEN);
        }
    }

    @RequestMapping(value = "/detail/{orderId}", method = RequestMethod.GET)
    public ResponseEntity<Object> detail(@PathVariable Long orderId) {
        if (ordersService.checkRole("ROLE_SALE") || ordersService.checkRole("ROLE_CS") || ordersService.checkRole("ROLE_OP") || ordersService.checkRole("ROLE_ADMIN")) {
            List<OrderDetail> lst = orderDetailService.findAllByOrderIdOrderByGroupCode(orderId);
            return AppHelper.createResponseEntity(lst, lst.size(), "", true, HttpStatus.OK);
        } else {
            return AppHelper.createResponseEntity(null, 1, "You are not authorized to access this resource!", false, HttpStatus.FORBIDDEN);
        }
    }


    @RequestMapping(value = "/save_revenue/{orderId}", method = RequestMethod.POST)
    public ResponseEntity<Object> saveRevenue(@RequestBody SaveRevenue revenue, @PathVariable("orderId") Long orderId) {
        if (ordersService.checkRole("ROLE_CS") || ordersService.checkRole("ROLE_OP") || ordersService.checkRole("ROLE_ADMIN")) {
            try {
                User user = ordersService.getCurrentUserModel();
                Department dept = departmentService.findById(user.getDeptId());
                orderDetailService.deleteByOrderId(orderId);
                for (OrderDetail detail : revenue.getLstOrderDetails()) {
//                    if (detail.getUserId() == null || user.getUserId().equals(detail.getUserId())) {
                    if (detail.getId() == null) {
                        detail.setUserId(user.getUserId());
                        detail.setUserName(user.getFullName());
                        detail.setDeptId(user.getDeptId());
                        detail.setDeptCode(dept.getUnitCode());
                        detail.setDeptName(dept.getDeptName());
                        detail.setCreatedDate(new Date());
                    } else {
                        detail.setUpdatedDate(new Date());
                    }
                    orderDetailService.save(detail);
//                    }
                }
                Orders order = ordersService.findById(orderId);
                order.setRateProfit(revenue.getProfitRate());
                ordersService.save(order);
                return AppHelper.createResponseEntity(null, 1, "", true, HttpStatus.OK);
            } catch (Exception ex) {
                LOGGER.error(ex.getMessage(), ex);
                return AppHelper.createResponseEntity(null, 1, "", false, HttpStatus.BAD_REQUEST);
            }
        } else {
            return AppHelper.createResponseEntity(null, 1, "You are not authorized to access this resource!", false, HttpStatus.FORBIDDEN);
        }
    }

    @RequestMapping(value = "/approve/{orderId}", method = RequestMethod.POST)
    public ResponseEntity<Object> approve(@PathVariable("orderId") Long orderId, @RequestBody String flow) {
        int num = ordersService.approve(orderId, flow);
        if (num > 0) {
            return AppHelper.createResponseEntity(null, 1, "", true, HttpStatus.OK);
        } else {
            return AppHelper.createResponseEntity(null, 1, "You are not authorized to access this resource!", false, HttpStatus.FORBIDDEN);
        }
    }


    @RequestMapping(value = "/process_order/{orderId}", method = RequestMethod.POST)
    @Transactional
    public ResponseEntity<Object> processOrder(@PathVariable("orderId") Long orderId, @RequestBody ProcessOrder processOrder) {
        try {
            Orders order = ordersService.findById(orderId);
            order.setEstimatedStartDate(processOrder.getEstimatedStartDate());
            order.setEstimatedEndDate(processOrder.getEstimatedEndDate());

            ordersService.save(order);

            int num = ordersService.approve(orderId, processOrder.getFlowSign());
            if (num > 0) {
                return AppHelper.createResponseEntity(null, 1, "", true, HttpStatus.OK);
            } else {
                return AppHelper.createResponseEntity(null, 1, "You are not authorized to access this resource!", false, HttpStatus.FORBIDDEN);
            }

        } catch (Exception ex) {
            LOGGER.error(ex.getMessage(), ex);
            return AppHelper.createResponseEntity(null, 1, "", false, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/check_approve_permession/{orderId}", method = RequestMethod.POST)
    public ResponseEntity<Object> checkApprovePermission(@PathVariable("orderId") Long orderId, @RequestBody List<String> flows) {
        if (ordersService.checkPermissionApprove(orderId, flows)) {
            return AppHelper.createResponseEntity(null, 1, "", true, HttpStatus.OK);
        } else {
            return AppHelper.createResponseEntity(null, 1, "You are not authorized to access this resource!", false, HttpStatus.OK);
        }
    }

}
