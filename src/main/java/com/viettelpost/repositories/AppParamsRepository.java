package com.viettelpost.repositories;

import com.viettelpost.entity.AppParams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppParamsRepository extends JpaRepository<AppParams, Long> {
    public List<AppParams> findAllByParType(String parType);
}
