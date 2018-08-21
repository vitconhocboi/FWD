package com.viettelpost.service;

import com.viettelpost.entity.DebtManagement;
import com.viettelpost.repositories.DebtManagementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Query;


@Service
public class DebtManagementService extends BaseCustomService<DebtManagement> {
    @Autowired
    DebtManagementRepository debtManagementRepository;

    public DebtManagement findFirstByObjectDebtIdAndType(Long objectDebtId, Long type) {
        return debtManagementRepository.findFirstByObjectDebtIdAndType(objectDebtId, type);
    }

    @Transactional
    public void updateAmountDebt(Long debtId, Double amount) {
        Query query = entityManager.createQuery("update DebtManagement set amount=amount + :amount where id =:debtId");
        query.setParameter("debtId", debtId);
        query.setParameter("amount", amount);
        query.executeUpdate();
    }
}
