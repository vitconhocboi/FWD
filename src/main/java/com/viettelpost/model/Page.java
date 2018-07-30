/*
 * Created on 22 Mar 2017 ( Time 13:09:56 )
 * Generated by Telosys Tools Generator ( version 2.1.1 )
 */
// This Bean has a basic Primary Key (not composite) 
package com.viettelpost.model;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "PAGES")
public class Page {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "page_seq"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "PAGE_ID")
    private Long pageId;
    @Column(name = "PAGE_ORDER")
    private Long pageOrder;
    @Column(name = "PAGE_NAME")
    private String pageName;
    @Column(name = "IS_VISIBLE")
    private Long isVisible;
    @Column(name = "PARENT_ID")
    private Long parentId;
    @Column(name = "PAGE_LEVEL")
    private Long pageLevel;
    @Column(name = "PAGE_URL")
    private String pageUrl;
    @Column(name = "IS_DELETE")
    private Long isDeleted;
    @Column(name = "MENU_TYPE")
    private Long menuType;
    @Transient
    private transient List<Page> children = new ArrayList<>();

    public Long getPageId() {
        return pageId;
    }

    public void setPageId(Long pageId) {
        this.pageId = pageId;
    }

    public Long getPageOrder() {
        return pageOrder;
    }

    public void setPageOrder(Long pageOrder) {
        this.pageOrder = pageOrder;
    }

    public String getPageName() {
        return pageName;
    }

    public void setPageName(String pageName) {
        this.pageName = pageName;
    }

    public Long getIsVisible() {
        return isVisible;
    }

    public void setIsVisible(Long isVisible) {
        this.isVisible = isVisible;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public Long getPageLevel() {
        return pageLevel;
    }

    public void setPageLevel(Long pageLevel) {
        this.pageLevel = pageLevel;
    }

    public String getPageUrl() {
        return pageUrl;
    }

    public void setPageUrl(String pageUrl) {
        this.pageUrl = pageUrl;
    }

    public Long getIsDeleted() {
        return isDeleted;
    }

    public void setIsDeleted(Long isDeleted) {
        this.isDeleted = isDeleted;
    }

    public Long getMenuType() {
        return menuType;
    }

    public List<Page> getChildren() {
        return children;
    }

    public void setChildren(List<Page> children) {
        this.children = children;
    }

    public void setMenuType(Long menuType) {
        this.menuType = menuType;
    }
}
