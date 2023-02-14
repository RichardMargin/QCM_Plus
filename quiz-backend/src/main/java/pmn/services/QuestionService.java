package pmn.services;

import pmn.models.Question;

import java.util.List;
import java.util.Optional;

public interface QuestionService {

    List<Question> findAll();
    Optional<Question> findById(Long id);
    Question save(Question question);

    List<Question> findAllByQuizId(Long id);

}
