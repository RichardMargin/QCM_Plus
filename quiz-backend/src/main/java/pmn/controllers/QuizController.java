package pmn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pmn.models.Quiz;
import pmn.services.QuestionService;
import pmn.services.QuizService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @Autowired
    private QuestionService questionService;

    @GetMapping
    public ResponseEntity<List<Quiz>> findAll() {
        return ResponseEntity.ok().body(quizService.findAll());
    }

    @GetMapping("/intern")
    public ResponseEntity<List<Quiz>> findAllForIntern() {
        List<Quiz> quizzes = quizService.findAllForIntern();
        for (Quiz quiz:quizzes) {
            quiz.setNbOfQuestions(questionService.countAllByQuiz(quiz));
        }
        return ResponseEntity.ok().body(quizzes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quiz> findById(@PathVariable Long id) {
        Optional<Quiz> opt = quizService.findById(id);
        if (opt.isPresent()) {
            return new ResponseEntity<>(opt.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping
    public ResponseEntity<Quiz> create(@RequestBody Quiz quiz) {
        return new ResponseEntity<>(quizService.save(quiz), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Quiz> update(@RequestBody Quiz quiz) {
        return new ResponseEntity<>(quizService.save(quiz), HttpStatus.CREATED);
    }

}
