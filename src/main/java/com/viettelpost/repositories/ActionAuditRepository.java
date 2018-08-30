package com.viettelpost.repositories;

import com.viettelpost.entity.ActionAudit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActionAuditRepository extends JpaRepository<ActionAudit, Long> {
}
