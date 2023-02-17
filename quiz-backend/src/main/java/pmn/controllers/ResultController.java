package pmn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pmn.models.Result;
import pmn.services.ResultService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/result")
public class ResultController {

    @Autowired
    private ResultService resultService;

    @GetMapping
    public List<Result> findAll() {
        return resultService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Result> findById(@PathVariable Long id) {
        Optional<Result> opt = resultService.findById(id);
        if (opt.isPresent()) {
            return new ResponseEntity<>(opt.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping
    public ResponseEntity<Result> create(@RequestBody Result result) {
        return new ResponseEntity<>(resultService.save(result), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Result> update(@RequestBody Result result) {
        return new ResponseEntity<>(resultService.save(result), HttpStatus.CREATED);
    }

}
