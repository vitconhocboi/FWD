package com.viettelpost.controller;

import com.google.gson.Gson;
import com.viettelpost.constant.AppConstant;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.model.Department;
import com.viettelpost.model.Page;
import com.viettelpost.model.User;
import com.viettelpost.model.UserCustom;
import com.viettelpost.service.DepartmentService;
import com.viettelpost.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationTrustResolver;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.rememberme.PersistentTokenBasedRememberMeServices;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/")
public class AppController {
    protected static final Logger LOGGER = LoggerFactory.getLogger(AppController.class);

    @Autowired
    MessageSource messageSource;

    @Autowired
    PersistentTokenBasedRememberMeServices persistentTokenBasedRememberMeServices;

    @Autowired
    AuthenticationTrustResolver authenticationTrustResolver;

    @Autowired
    Environment environment;

    @Autowired
    private HttpSession httpSession;

    @Autowired
    private ServletContext servletContext;

    @Autowired
    private DepartmentService departmentService;

    @Autowired
    private UserService userService;

    public List<Page> getMenuData() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Page> Tabs = null;
        if (principal instanceof UserDetails) {
            UserCustom user = (UserCustom) principal;
            Tabs = user.getLstMenu();
        }
        return Tabs;
    }

    @RequestMapping(value = {AppConstant.ControllerURI.ROOT,
            AppConstant.ControllerURI.HOME,
            AppConstant.ControllerURI.INDEX}, method = RequestMethod.GET)
    public String indexPage(ModelMap model) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            //UserCustom user = (UserCustom) principal;
            initData(model);
        } else {
            return AppConstant.Pages.ERROR;
        }

        return AppConstant.Pages.HOME;
    }

    @RequestMapping(value = AppConstant.ControllerURI.LOGIN, method = RequestMethod.GET)
    public String loginPage() {
        if (isCurrentAuthenticationAnonymous()) {
            return AppConstant.Pages.LOGIN;
        } else {
            return AppConstant.redirectPage(AppConstant.Pages.HOME);
        }
    }

    @RequestMapping(value = AppConstant.ControllerURI.LOGOUT, method = RequestMethod.GET)
    public String logoutPage(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            persistentTokenBasedRememberMeServices.logout(request, response, auth);
            SecurityContextHolder.getContext().setAuthentication(null);
        }
        return AppConstant.redirectPage(AppConstant.Pages.LOGOUT);
    }

    @RequestMapping(value = AppConstant.ControllerURI.NOACCESS, method = RequestMethod.GET)
    public String accessDeniedPage(ModelMap model) {
        initData(model);
        return AppConstant.Pages.ACCESSDINED;
    }

    @RequestMapping(value = AppConstant.ControllerURI.NOTFOUND, method = RequestMethod.GET)
    public String notfoundPage(ModelMap model) {
        initData(model);
        return AppConstant.Pages.NOTFOUND;
    }

    @RequestMapping(value = AppConstant.ControllerURI.ERROR, method = RequestMethod.GET)
    public String errorPage(ModelMap model) {
        initData(model);
        return AppConstant.Pages.ERROR;
    }

    @RequestMapping(value = AppConstant.ControllerURI.CATEST, method = RequestMethod.GET)
    public String caTestPage(ModelMap model) {
        initData(model);
        return AppConstant.Pages.TESTCA;
    }

    @RequestMapping(value = "updateUserInfo", method = RequestMethod.GET)
    public String updateUserInfo(ModelMap model) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        initData(model);
        if (principal instanceof UserCustom) {
            User user = ((UserCustom) principal).getUserModel();
            if (user.getDeptId() != null) {
                Department department = departmentService.findById(user.getDeptId());
                if (department != null) {
                    user.setDepartmentName(department.getDeptName());
                }
            }
            model.addAttribute("userModel", new Gson().toJson(user));
        }
        return "viettelpost.page.admin.user.updateInfo";
    }

    @RequestMapping(value = "/saveUserInfo", method = RequestMethod.POST)
    public ResponseEntity<Object> save(@RequestBody User object) {
        try {
            Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            if (principal instanceof UserCustom) {
                User user = ((UserCustom) principal).getUserModel();
                user.setFullName(object.getFullName());
                user.setPassword(object.getPassword());
                user.setPhone(object.getPhone());
                user.setEmail(object.getEmail());
                user.setDateOfBirth(object.getDateOfBirth());
                user.setAddress(object.getAddress());
                userService.save(user);
            }
            return AppHelper.createResponseEntity(object, 1, "", true, HttpStatus.OK);
        } catch (Exception e) {
            return AppHelper.createResponseEntity(null, 1, "Có lỗi xảy ra", false, HttpStatus.OK);
        }
    }

    private String getPrincipal() {
        String userName;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            userName = ((UserDetails) principal).getUsername();
        } else {
            userName = principal.toString();
        }
        return userName;
    }

    private boolean isCurrentAuthenticationAnonymous() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authenticationTrustResolver.isAnonymous(authentication);
    }

    private void initData(ModelMap model) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            UserCustom user = (UserCustom) principal;
            if (user != null) {
                model.addAttribute(AppConstant.DanhMuc.Menu, getMenuData());
                model.addAttribute(AppConstant.DanhMuc.UserName, getPrincipal());
                model.addAttribute(AppConstant.DanhMuc.Version, AppConstant.getVersion());
            }
        }
    }
}
