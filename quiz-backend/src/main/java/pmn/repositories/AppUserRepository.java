package pmn.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pmn.models.AppUser;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {

    Optional<AppUser> findByLastNameAndPassword(String lastName, String password);

}
