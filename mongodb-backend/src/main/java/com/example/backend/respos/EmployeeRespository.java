package com.example.backend.respos;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.backend.model.Employee;

public interface EmployeeRespository extends MongoRepository <Employee, String> {
	
}