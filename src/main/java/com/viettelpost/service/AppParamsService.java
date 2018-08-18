package com.viettelpost.service;

import com.viettelpost.model.AppParams;
import com.viettelpost.repositories.AppParamsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppParamsService extends BaseCustomService<AppParams> {
    @Autowired
    AppParamsRepository appParamsRepository;

    public List<AppParams> findByParType(String parType) {
        return appParamsRepository.findAllByParType(parType);
    }
}
