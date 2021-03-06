package com.viettelpost.service;

import com.viettelpost.entity.Partner;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@Transactional
public class PartnerSevice extends BaseCustomService<Partner> {
    @Override
    public Partner save(Partner bo) throws Exception {
        if (bo.getPartnerId() != null) {
            bo.setUpdatedDate(new Date());
            bo.setUpdatedUser(getCurrentUserModel().getUserId());
        } else {
            bo.setCreatedDate(new Date());
            bo.setCreatedUser(getCurrentUserModel().getUserId());
        }
        return super.save(bo);
    }
}
