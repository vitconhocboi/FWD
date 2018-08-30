package com.viettelpost.repositories;

import com.viettelpost.entity.ActionDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActionDetailRepository extends JpaRepository<ActionDetail, Long> {
}
