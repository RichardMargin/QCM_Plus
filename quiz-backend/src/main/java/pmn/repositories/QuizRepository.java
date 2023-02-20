package pmn.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pmn.models.Quiz;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

    List<Quiz> findAllByIsActiveTrueAndIsSharedTrue();

}
