package pmn.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pmn.models.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

}
