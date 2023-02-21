package pmn.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pmn.models.Question;
import pmn.models.Quiz;
import pmn.repositories.QuestionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public List<Question> findAll() {
        return questionRepository.findAll();
    }

    @Override
    public Optional<Question> findById(Long id) {
        return questionRepository.findById(id);
    }

    @Override
    public Question save(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public List<Question> findAllByQuizId(Long id) {
        return questionRepository.findAllByQuizId(id);
    }

    @Override
    public Integer countAllByQuiz(Quiz quiz) {
        return questionRepository.countAllByQuiz(quiz);
    }
}
