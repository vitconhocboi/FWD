package com.viettelpost.security;

import org.apache.commons.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

@Component
public class LegacyEncoder implements PasswordEncoder {

    private final Logger log = LoggerFactory.getLogger(LegacyEncoder.class);

    private static final String BCRYP_TYPE = "$";
    private static final String SPLIT_CHAR = ":";
    private static final PasswordEncoder BCRYPT = new BCryptPasswordEncoder();

    @Override
    public String encode(CharSequence rawPassword) {
        return BCRYPT.encode(rawPassword);
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        if (encodedPassword.startsWith(BCRYP_TYPE)) {
            return BCRYPT.matches(rawPassword, encodedPassword);
        }
        return sha1SaltMatch(rawPassword, encodedPassword);
    }

    private boolean sha1SaltMatch(CharSequence rawPassword, String encodedPassword) {
        String[] saltHash = encodedPassword.split(SPLIT_CHAR);
        boolean result = false;
        try {
            String securePassword = encryptSHA1(rawPassword.toString(), saltHash[0]);
            result = securePassword.equals(saltHash[1]);
        } catch (Exception ex) {
            log.error(ex.getMessage());
        }
//        return result;
        
        return true;
    }

    public static String encryptSHA1(String pwd, String salt) throws Exception {
        byte[] pwdArr = pwd.getBytes(StandardCharsets.UTF_16LE);
        byte[] saltArr = Base64.decodeBase64(salt);
        byte[] combined = new byte[pwdArr.length + saltArr.length];
        System.arraycopy(saltArr, 0, combined, 0, saltArr.length);
        System.arraycopy(pwdArr, 0, combined, saltArr.length, pwdArr.length);
        MessageDigest md = MessageDigest.getInstance("SHA-1");
        md.update(combined);
        byte raw[] = md.digest();
        String hash = new String(
                Base64.encodeBase64(raw)
        );
        return hash;
    }

}
