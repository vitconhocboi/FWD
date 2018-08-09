package com.viettelpost.repositories;

import com.viettelpost.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    List<OrderDetail> findAllByOrderIdOrderByGroupCode(Long orderId);

    void deleteByOrderIdAndUserId(Long orderId, Long userId);
}
