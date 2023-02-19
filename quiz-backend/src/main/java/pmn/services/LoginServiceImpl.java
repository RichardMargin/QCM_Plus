package pmn.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pmn.models.AppUser;
import pmn.repositories.AppUserRepository;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private AppUserRepository appUserRepository;

    @Override
    public Optional<AppUser> login(String name, String password) {
        MessageDigest digest;
        try {
            digest = MessageDigest.getInstance("SHA3-256");
            byte[] hashBytes = digest.digest(
                    password.getBytes(StandardCharsets.UTF_8));
            String sha3Hex = bytesToHex(hashBytes);
            return appUserRepository.findByLastNameAndPassword(name, sha3Hex);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    private String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte hashByte : bytes) {
            int intVal = 0xff & hashByte;
            if (intVal < 0x10) {
                sb.append('0');
            }
            sb.append(Integer.toHexString(intVal));
        }
        return sb.toString();
    }
}
