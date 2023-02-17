package pmn.services;

import pmn.models.AppUser;

import java.util.List;
import java.util.Optional;

public interface AppUserService {

    List<AppUser> findAll();
    Optional<AppUser> findById(Long id);
    AppUser save(AppUser appUser);
}
