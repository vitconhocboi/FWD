package com.viettelpost.entity;

import javax.persistence.*;

@Entity
@Table(name = "APP_PARAMS")
public class AppParams {
    @Id
    @Column(name = "ID")
    private Long id;
    @Basic
    @Column(name = "PAR_TYPE")
    private String parType;
    @Basic
    @Column(name = "PAR_CODE")
    private String parCode;
    @Basic
    @Column(name = "PAR_NAME")
    private String parName;
    @Basic
    @Column(name = "PAR_VALUE")
    private String parValue;
    @Basic
    @Column(name = "NOTE")
    private String note;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getParType() {
        return parType;
    }

    public void setParType(String parType) {
        this.parType = parType;
    }

    public String getParCode() {
        return parCode;
    }

    public void setParCode(String parCode) {
        this.parCode = parCode;
    }

    public String getParName() {
        return parName;
    }

    public void setParName(String parName) {
        this.parName = parName;
    }

    public String getParValue() {
        return parValue;
    }

    public void setParValue(String parValue) {
        this.parValue = parValue;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

}
