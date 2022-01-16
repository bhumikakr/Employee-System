package com.example.backend.respos;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.backend.model.Employee;

public interface CompensationRespository extends MongoRepository <Employee, String>{

}
