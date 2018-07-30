package com.viettelpost.controller.admin;

import com.viettelpost.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/user")
public class UserController extends BaseController {

    @Override
    public String getCurrentPage() {
        return "viettelpost.page.admin.user";
    }

}
