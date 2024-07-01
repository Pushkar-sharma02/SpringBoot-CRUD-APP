package com.firstProject.fullstack_springboot.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.firstProject.fullstack_springboot.model.user;

public interface UserRepo extends JpaRepository<user,Long>{

}
