package com.viettelpost.service;

import com.viettelpost.model.OrderDetail;
import com.viettelpost.repositories.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService extends BaseCustomService<OrderDetail> {
    @Autowired
    OrderDetailRepository orderDetailRepository;

    public List<OrderDetail> findAllByOrderIdOrderByGroupCode(Long orderId) {
        return orderDetailRepository.findAllByOrderIdOrderByGroupCode(orderId);
    }

    public void deleteByOrderIdAnduAndUserId(Long orderId) {
        orderDetailRepository.deleteByOrderIdAndUserId(orderId, getCurrentUserModel().getUserId());
    }
}
