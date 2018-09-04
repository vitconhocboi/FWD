package com.viettelpost.repositories;

import com.viettelpost.entity.ServicePort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicePortReository extends JpaRepository<ServicePort, Long> {
}
