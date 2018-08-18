package com.viettelpost.controller.admin;

import com.viettelpost.controller.BaseController;
import com.viettelpost.entity.User;
import com.viettelpost.service.BaseCustomService;
import com.viettelpost.service.UserService;
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
@RequestMapping(value = "/admin/user")
public class UserController extends BaseController<User> {
    @Autowired
    UserService userService;

    @Override
    protected BaseCustomService<User> getSevice() {
        return userService;
    }


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
}
