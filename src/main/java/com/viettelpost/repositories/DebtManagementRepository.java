package com.viettelpost.repositories;

import com.viettelpost.entity.DebtManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DebtManagementRepository extends JpaRepository<DebtManagement, Long> {
    public DebtManagement findFirstByObjectDebtIdAndType(Long objectDebtId, Long type);
}
