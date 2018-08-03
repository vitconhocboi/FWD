package com.viettelpost.service;

import com.viettelpost.model.Port;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PortService extends BaseCustomService<Port> {
}
