package com.viettelpost.security;

import com.google.gson.Gson;
import com.viettelpost.controller.json.ResponseJson;
import com.viettelpost.helper.AppHelper;
import com.viettelpost.model.User;
import com.viettelpost.model.UserCustom;
import com.viettelpost.service.PageService;
import com.viettelpost.service.RoleService;
import com.viettelpost.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class CustomAuthenticationProvider
        implements AuthenticationProvider {
    @Autowired
    UserService userService;


    @Autowired
    private RoleService roleService;

    @Autowired
    private PageService pageService;

    private static final PasswordEncoder BCRYPT = new BCryptPasswordEncoder();

    @Override
    public Authentication authenticate(Authentication authentication)
            throws AuthenticationException {

        String username = authentication.getName();
        String password = authentication.getCredentials().toString();
        User user = ssoLogin(username, password);
        if (user != null) {
            List<GrantedAuthority> lstAuthorities = getGrantedAuthorities(user);
            UserCustom userCustom = new UserCustom(user, pageService.getPagesByUsername(username), lstAuthorities);
            return new UsernamePasswordAuthenticationToken(
                    userCustom, authentication.getCredentials(), lstAuthorities);
        } else {
            return null;
        }
    }

    private List<GrantedAuthority> getGrantedAuthorities(User user) {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        if (1L == user.getActive()) {
            authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
        }
        List<String> customRole = roleService.getListRoleByUserName(user.getUserName());
        for (String role : customRole) {
            authorities.add(new SimpleGrantedAuthority(role));
        }
        return authorities;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(
                UsernamePasswordAuthenticationToken.class);
    }

    private User ssoLogin(String username, String password) {
        try {
            User user = userService.findByUsername(username);
            if (user == null || user.getUserType() == 1L) {
                //check sso user
                Map<String, Object> map = new HashMap<>();
                map.put("username", username);
                map.put("password", password);
                map.put("postoffice", "PKDQT");
                map.put("source", 10);
                Map<String, Object> params = new HashMap<>();
                ResponseJson response = AppHelper.callRestTemplate("https://pda.viettelpost.vn/api/user/login", map, HttpMethod.POST, params);
                if (response.getData() != null) {
                    String fullName = ((Map) ((Map) response.getData()).get("info")).get("full_name").toString();
                    String phone = ((Map) ((Map) response.getData()).get("info")).get("phone").toString();

                    if (user == null) {
                        //create new user
                        user = new User();
                        user.setUserName(username);
                        user.setPassword(username);
                        user.setFullName(fullName);
                        user.setPhone(phone);
                        user.setActive(1L);
                        user.setUserType(1L);
                        user = userService.save(user);
                    }
                    return user;
                }
            } else if (user.getUserType() == 0L) {
                if (BCRYPT.matches(password, user.getPassword())) {
                    return user;
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }

}
