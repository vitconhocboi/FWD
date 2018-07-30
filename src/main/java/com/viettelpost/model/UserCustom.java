/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.viettelpost.model;

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

    public UserCustom(com.viettelpost.model.User user, List<Page> lstPages, Collection<? extends GrantedAuthority> authorities) {
        super(user.getUsername(), user.getPassword(), authorities);
        this.lstPages = lstPages;
    }

    public List<Page> getLstPages() {
        return lstPages;
    }

    public void setLstPages(List<Page> lstPages) {
        this.lstPages = lstPages;
    }
}
