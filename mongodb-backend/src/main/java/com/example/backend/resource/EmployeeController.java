package com.example.backend.resource;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Employee;
import com.example.backend.respos.EmployeeRespository;

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeRespository repository;
	
//	Services for Employee like add, view, edit, delete
	
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee) {
		return repository.save(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return repository.findAll();
	}
	
	@GetMapping("/employees/{id}")
	public Optional<Employee> getEmployees(@PathVariable String id) {
		return repository.findById(id);
	}
	
	@PutMapping("/employees/{id}")
	public Optional<Employee> editEmployee(@PathVariable String id, @RequestBody Employee employeeDetails){
		Employee employee = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setMiddleName(employeeDetails.getMiddleName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setBod(employeeDetails.getBod());
		employee.setPosition(employeeDetails.getPosition());
		
		Employee updatedEmployee = repository.save(employee);
		return Optional.of(updatedEmployee);
	}
	
	@DeleteMapping("/employees/{id}")
	public Optional<Map<String, Boolean>> deleteEmployee(@PathVariable String id){
		Employee employee = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		repository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return Optional.of(response);
	}
}