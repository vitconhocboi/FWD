package com.viettelpost.repositories;

import com.viettelpost.model.Price;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PriceRepository extends JpaRepository<Price, Long> {
    @Query("select a from Price a where a.serviceId = ?1 and ( a.validTo is null or a.validTo >= sysdate )")
    List<Price> findTop10ByServiceId(Long serviceId);
}
