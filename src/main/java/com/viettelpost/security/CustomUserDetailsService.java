package com.viettelpost.security;

import com.viettelpost.model.Page;
import com.viettelpost.model.User;
import com.viettelpost.model.UserCustom;
import com.viettelpost.service.PageService;
import com.viettelpost.service.RoleService;
import com.viettelpost.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service("customUserDetailsService")
public class CustomUserDetailsService implements UserDetailsService {

    static final Logger logger = LoggerFactory.getLogger(CustomUserDetailsService.class);

    @Autowired
    private Environment environment;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private PageService pageService;

    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String ssoId) throws UsernameNotFoundException {
        User user = userService.findByUsername(ssoId);

        List<Page> lstPages = pageService.getPagesByUsername(ssoId);

        return new UserCustom(user, lstPages, getGrantedAuthorities(user));
    }

    private List<GrantedAuthority> getGrantedAuthorities(User user) {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        if (1L == user.getActive()) {
            authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
            authorities.add(new SimpleGrantedAuthority("ROLE_DBA"));
            authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
        }
        List<String> customRole = roleService.getListRoleByUserName(user.getUserName());
        for (String role : customRole) {
            authorities.add(new SimpleGrantedAuthority(role));
        }
        return authorities;
    }

}
