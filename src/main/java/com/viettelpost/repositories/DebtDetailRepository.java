package com.viettelpost.repositories;

import com.viettelpost.entity.DebtDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DebtDetailRepository extends JpaRepository<DebtDetail, Long> {
}
