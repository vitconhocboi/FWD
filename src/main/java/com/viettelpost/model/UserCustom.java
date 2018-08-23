/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.viettelpost.model;

import com.viettelpost.entity.Page;
import com.viettelpost.helper.AppHelper;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * @author Phong84NV
 */

public class UserCustom extends User {
    private List<Page> lstPages = new ArrayList<>();
    private List<Page> lstMenu = new ArrayList<>();
    private com.viettelpost.entity.User userModel;

    public UserCustom(com.viettelpost.entity.User user, List<Page> lstPages, Collection<? extends GrantedAuthority> authorities) {
        super(user.getUserName(), user.getPassword(), authorities);
        this.userModel = user;
        this.lstPages = lstPages;
        this.lstMenu = AppHelper.getMenusForUser(lstPages);
    }

    public List<Page> getLstPages() {
        return lstPages;
    }

    public List<Page> getLstMenu() {
        return lstMenu;
    }

    public com.viettelpost.entity.User getUserModel() {
        return userModel;
    }
}
