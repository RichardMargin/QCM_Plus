package pmn.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pmn.models.Result;

public interface ResultRepository extends JpaRepository<Result, Long> {

}
