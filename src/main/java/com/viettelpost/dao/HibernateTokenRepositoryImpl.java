package com.viettelpost.dao;

import org.springframework.security.web.authentication.rememberme.PersistentRememberMeToken;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Repository("tokenRepositoryDao")
@Transactional
public class HibernateTokenRepositoryImpl implements PersistentTokenRepository {

    @Override
    public void createNewToken(PersistentRememberMeToken token) {
       
    }

    @Override
    public PersistentRememberMeToken getTokenForSeries(String seriesId) {
        return null;
    }

    @Override
    public void removeUserTokens(String username) {
    }

    @Override
    public void updateToken(String seriesId, String tokenValue, Date lastUsed) {
    }

}
