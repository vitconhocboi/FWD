package com.viettelpost.service;

import com.viettelpost.model.Customer;
import com.viettelpost.model.UserCustom;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@Transactional
public class CustomerService extends BaseCustomService<Customer> {

    @Override
    public Customer save(Customer bo) throws Exception {
        if (bo.getCustomerId() != null) {
            bo.setUpdatedDate(new Date());
            bo.setUpdatedUser(getCurrentUserModel().getUserId());
        } else {
            bo.setCreatedDate(new Date());
            bo.setCreatedUser(getCurrentUserModel().getUserId());
        }
        return super.save(bo);
    }
}