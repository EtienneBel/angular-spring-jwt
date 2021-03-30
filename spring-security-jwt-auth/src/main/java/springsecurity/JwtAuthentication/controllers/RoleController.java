package springsecurity.JwtAuthentication.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springsecurity.JwtAuthentication.models.Role;
import springsecurity.JwtAuthentication.repositories.RoleRepository;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/roles")
public class RoleController {

    @Autowired
    RoleRepository roleRepository;

    @PostMapping("/create")
    // public ResponseEntity<?> registerUser(@Valid @RequestBody User user) {
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody Role role) {
         Role tmpRole = roleRepository.save(role);
         return ResponseEntity.ok(tmpRole);
    }
}
