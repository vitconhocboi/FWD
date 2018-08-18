package com.viettelpost.service;

import com.viettelpost.entity.OrderDetail;
import com.viettelpost.repositories.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class OrderDetailService extends BaseCustomService<OrderDetail> {
    @Autowired
    OrderDetailRepository orderDetailRepository;

    public List<OrderDetail> findAllByOrderIdOrderByGroupCode(Long orderId) {
        return orderDetailRepository.findAllByOrderIdOrderByGroupCode(orderId);
    }

    public void deleteByOrderId(Long orderId) {
        orderDetailRepository.deleteByOrderId(orderId);
    }
}
