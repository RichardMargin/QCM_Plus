package pmn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pmn.models.AppUser;
import pmn.services.AppUserService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/appUser")
public class AppUserController {

    @Autowired
    private AppUserService appUserService;

    @GetMapping
    public List<AppUser> findAll() {
        return appUserService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppUser> findById(@PathVariable Long id) {
        Optional<AppUser> opt = appUserService.findById(id);
        if (opt.isPresent()) {
            return new ResponseEntity<>(opt.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping
    public ResponseEntity<AppUser> create(@RequestBody AppUser appUser) {
        return new ResponseEntity<>(appUserService.save(appUser), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<AppUser> update(@RequestBody AppUser appUser) {
        return new ResponseEntity<>(appUserService.save(appUser), HttpStatus.CREATED);
    }

}
