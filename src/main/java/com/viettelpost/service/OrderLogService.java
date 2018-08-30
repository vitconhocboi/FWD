package com.viettelpost.service;

import com.viettelpost.entity.OrderLog;
import com.viettelpost.entity.User;
import com.viettelpost.model.UserCustom;
import com.viettelpost.repositories.OrderLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class OrderLogService {
    @Autowired
    OrderLogRepository orderLogRepository;

    public OrderLog save(OrderLog bo) throws Exception {
        User currentUser = ((UserCustom) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUserModel();
        bo.setActionDate(new Date());
        bo.setUserId(currentUser.getUserId());
        bo.setFullName(currentUser.getFullName());
        return orderLogRepository.save(bo);
    }

    public List<OrderLog> findAllByOrderId(Long orderId) {
        return orderLogRepository.findAllByOrderIdOrderByActionDateDescIdDesc(orderId);
    }

}
