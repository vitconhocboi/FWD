/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.viettelpost.helper;

import com.viettelpost.model.Page;

import java.util.ArrayList;
import java.util.List;

/**
 * @author PhongNguyen
 */
public class AppHelper {

    public static List<Page> getMenusForUser(List<Page> menuData) {
        List<Page> menusList = new ArrayList<>();
        for (Page page : menuData) {
            if (page.getParentId() == null) {
                menusList.add(page);
            } else {
                Page pageParent = getParentTab(menuData, page);
                if (pageParent != null) {
                    pageParent.getChildren().add(page);
                }
            }
        }
        return menusList;
    }

    private static Page getParentTab(List<Page> tabs, Page pageChild) {
        for (Page page : tabs) {
            if (page.getPageId().equals(pageChild.getParentId())) {
                return page;
            } else if (page.getChildren() != null && !page.getChildren().isEmpty()) {
                Page tmp = getParentTab(page.getChildren(), pageChild);
                if (tmp != null) {
                    return tmp;
                }
            }
        }
        return null;
    }
}
