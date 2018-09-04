package com.viettelpost.service;

import com.viettelpost.entity.ServicePort;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ServicePortService extends BaseCustomService<ServicePort> {

    @Override
    public ServicePort save(ServicePort bo) throws Exception {
        if (bo.getId() == null) {
            bo.setCreatedDate(new Date());
            bo.setUserCreateId(getCurrentUserModel().getUserId());
        } else {
            bo.setUpdatedDate(new Date());
            bo.setUserUpdateId(getCurrentUserModel().getUserId());
        }
        return super.save(bo);
    }
}
