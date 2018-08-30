package com.viettelpost.service;

import com.viettelpost.entity.DebtDetail;
import com.viettelpost.repositories.DebtDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DebtDetailService extends BaseCustomService<DebtDetail> {
    @Autowired
    DebtDetailRepository debtDetailRepository;

    public List<DebtDetail> findAllByOrderId(Long orderId) {
        return debtDetailRepository.findAllByOrderId(orderId);
    }
}
