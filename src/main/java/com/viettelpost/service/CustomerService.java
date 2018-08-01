package com.viettelpost.service;

import com.viettelpost.model.Customer;
import com.viettelpost.model.UserCustom;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class CustomerService extends BaseCustomService<Customer> {

    @Override
    public Customer save(Customer bo) throws Exception {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
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
