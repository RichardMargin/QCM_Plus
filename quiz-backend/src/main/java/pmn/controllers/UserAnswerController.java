package pmn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pmn.models.UserAnswer;
import pmn.services.UserAnswerService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/userAnswer")
public class UserAnswerController {

    @Autowired
    private UserAnswerService userAnswerService;

    @GetMapping
    public List<UserAnswer> findAll() {
        return userAnswerService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserAnswer> findById(@PathVariable Long id) {
        Optional<UserAnswer> opt = userAnswerService.findById(id);
        if (opt.isPresent()) {
            return new ResponseEntity<>(opt.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping
    public ResponseEntity<UserAnswer> create(@RequestBody UserAnswer userAnswer) {
        return new ResponseEntity<>(userAnswerService.save(userAnswer), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<UserAnswer> update(@RequestBody UserAnswer userAnswer) {
        return new ResponseEntity<>(userAnswerService.save(userAnswer), HttpStatus.CREATED);
    }

}
