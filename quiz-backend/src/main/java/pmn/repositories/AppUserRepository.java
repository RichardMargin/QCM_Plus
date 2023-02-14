package pmn.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pmn.models.AppUser;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {

}
