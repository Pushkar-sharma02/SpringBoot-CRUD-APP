package com.firstProject.fullstack_springboot.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.firstProject.fullstack_springboot.exception.UserNotFoundException;
import com.firstProject.fullstack_springboot.model.user;
import com.firstProject.fullstack_springboot.repository.UserRepo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import org.springframework.web.bind.annotation.PutMapping;



@CrossOrigin("http://localhost:3000/")
@RestController
public class UserController {
    @Autowired
    private UserRepo userRepo;

    @PostMapping("/user")
    user newUser(@RequestBody user newUser){
        return userRepo.save(newUser);
    }
    @GetMapping("/users")
    List<user> getAllUsers(){
        return userRepo.findAll();
    }
    @GetMapping("/user/{id}")
    user getUserbyId(@PathVariable Long id){
        return userRepo.findById(id)
            .orElseThrow(()->new UserNotFoundException(id));
    }
    @PutMapping("/user/{id}")
    user updateUser(@RequestBody user newUser, @PathVariable Long id) {
        
        return userRepo.findById(id)
            .map(user_update -> {
                user_update.setUsername(newUser.getUsername());
                user_update.setName(newUser.getName());
                user_update.setEmail(newUser.getEmail());
                return userRepo.save(user_update);
            }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepo.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepo.deleteById(id);
        return "User with id" + id +"has been deleted";
    }
}   
