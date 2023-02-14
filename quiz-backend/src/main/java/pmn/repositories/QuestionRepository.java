package pmn.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pmn.models.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
