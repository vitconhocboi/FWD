package com.viettelpost.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "ACTION_DETAIL")
public class ActionDetail {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "ACTION_DETAIL_SEQ"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "ID")
    private Long id;

    @Column(name = "ACTION_AUDIT_ID")
    private Long actionAuditId;

    @Column(name = "COLUMN_NAME")
    private String columnName;

    @Column(name = "OLD_VALUE")
    private String oldValue;

    @Column(name = "NEW_VALUE")
    private String newValue;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getActionAuditId() {
        return actionAuditId;
    }

    public void setActionAuditId(Long actionAuditId) {
        this.actionAuditId = actionAuditId;
    }

    public String getColumnName() {
        return columnName;
    }

    public void setColumnName(String columnName) {
        this.columnName = columnName;
    }

    public String getOldValue() {
        return oldValue;
    }

    public void setOldValue(String oldValue) {
        this.oldValue = oldValue;
    }

    public String getNewValue() {
        return newValue;
    }

    public void setNewValue(String newValue) {
        this.newValue = newValue;
    }
}
