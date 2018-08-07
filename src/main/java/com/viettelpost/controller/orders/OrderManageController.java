package com.viettelpost.controller.orders;

import com.viettelpost.controller.BaseController;
import com.viettelpost.model.Department;
import com.viettelpost.model.Orders;
import com.viettelpost.model.User;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.DepartmentService;
import com.viettelpost.service.OrdersService;
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
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@Controller
@RequestMapping(value = "/orders/manage")
public class OrderManageController extends BaseController<Orders> {
    @Autowired
    OrdersService ordersService;

    @Autowired
    DepartmentService departmentService;


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
        return "viettelpost.page.orders.manage.addedit";
    }

    @RequestMapping(value = {"/edit/{orderId}"}, method = RequestMethod.GET)
    public String editEntity(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                             Locale locale, ModelMap model, @PathVariable("orderId") Long orderId) {
        model.addAttribute("orderId", orderId);
        return "viettelpost.page.orders.manage.addedit";
    }

    @RequestMapping(value = {"/view/{orderId}"}, method = RequestMethod.GET)
    public String view(HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes,
                       Locale locale, ModelMap model, @PathVariable("orderId") Long orderId) {
        model.addAttribute("orderId", orderId);
        return "viettelpost.page.orders.manage.view ";
    }

    @Override
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody Orders object) {
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
        } else {
            object.setUpdatedDate(new Date());
        }
        return super.save(object);
    }
}
