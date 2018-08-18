package com.viettelpost.service;

import com.viettelpost.entity.Price;
import com.viettelpost.repositories.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PriceService extends BaseCustomService<Price> {
    @Autowired
    PriceRepository priceRepository;

    public List<Price> findByServiceId(Long serviceId) {
        return priceRepository.findTop10ByServiceId(serviceId);
    }
}
