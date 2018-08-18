package com.viettelpost.repositories;

import com.viettelpost.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    List<OrderDetail> findAllByOrderIdOrderByGroupCode(Long orderId);

    void deleteByOrderId(Long orderId);
}
