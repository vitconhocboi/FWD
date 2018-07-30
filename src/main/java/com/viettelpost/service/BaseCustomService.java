package com.viettelpost.service;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.GenericTypeResolver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

public class BaseCustomService<Tbo> {
    public static final Logger LOGGER = org.slf4j.LoggerFactory.getLogger(BaseCustomService.class);
    @Autowired
    protected EntityManager entityManager;

    @Autowired
    protected JpaRepository<Tbo, Long> repository;

    public List<Tbo> getAll() throws Exception {
        LOGGER.debug(getClassName() + ": getAll !");
        return repository.findAll();
    }

    public Tbo findById(Long id) {
        LOGGER.info(getClassName() + ": getById !");
        return repository.findOne(id);
    }

    @Transactional
    public Tbo save(Tbo bo) throws Exception {
        LOGGER.info(getClassName() + ": save !");
        return repository.save(bo);
    }

    @Transactional
    public void delete(Long id) throws Exception {
        LOGGER.info(getClassName() + ": deleteById !");
        repository.delete(id);
    }

    @Transactional
    public void deleteObject(Tbo object) throws Exception {
        LOGGER.debug(getClassName() + "'deleteByObject' !");
        repository.delete(object);
    }

    @Transactional
    public List<Tbo> saveList(List<Tbo> lst) throws Exception {
        LOGGER.debug(getClassName() + "'saveListObject' !");
        List<Tbo> result = new ArrayList<>();
        for (Tbo bo : lst) {
            repository.save(bo);
            result.add(bo);
        }
        return result;
    }

    private String getClassName() {
        Class<Tbo> genericType = (Class<Tbo>) GenericTypeResolver.resolveTypeArgument(getClass(), BaseCustomService.class);
        return genericType.getSimpleName();
    }
}
