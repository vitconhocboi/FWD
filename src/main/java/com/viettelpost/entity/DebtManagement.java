package com.viettelpost.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "DEBT_MANAGEMENT")
public class DebtManagement {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "DEBT_MANAGEMENT_SEQ"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "ID")
    private Long id;

    @Column(name = "OBJECT_DEBT_ID")
    private Long objectDebtId;

    @Column(name = "OBJECT_DEBT_NAME")
    private String objectDebtName;

    @Column(name = "TYPE")
    private Long type;

    @Column(name = "AMOUNT")
    private Double amount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getObjectDebtId() {
        return objectDebtId;
    }

    public void setObjectDebtId(Long objectDebtId) {
        this.objectDebtId = objectDebtId;
    }

    public String getObjectDebtName() {
        return objectDebtName;
    }

    public void setObjectDebtName(String objectDebtName) {
        this.objectDebtName = objectDebtName;
    }

    public Long getType() {
        return type;
    }

    public void setType(Long type) {
        this.type = type;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
