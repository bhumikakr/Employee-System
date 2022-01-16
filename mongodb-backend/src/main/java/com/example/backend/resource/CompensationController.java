package com.example.backend.resource;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Employee;
import com.example.backend.respos.CompensationRespository;


@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class CompensationController {
	
	
	@Autowired
	private CompensationRespository comprespo;
	
//	Services for Compensation like add, view, edit
	
	@PostMapping("/compensations/{id}")
	public Employee addComp(@RequestBody Employee employee) {
		return comprespo.save(employee);
	}
	
	@GetMapping("/compensations/{id}")
	public Optional<Employee> getComp(@PathVariable String id) {
		return comprespo.findById(id);
	}

	@PutMapping("/compensations/{id}")
	public Optional<Employee> editComp(@PathVariable String id, @RequestBody Employee compDetails){
		Employee employee = comprespo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		employee.setType(compDetails.getType());
		employee.setAmount(compDetails.getAmount());
		employee.setDate(compDetails.getDate());
		employee.setDescription(compDetails.getDescription());
		
		Employee updatedEmployee = comprespo.save(employee);
		return Optional.of(updatedEmployee);
	}
	
	@GetMapping("/compensations")
	public List<Employee> getAllComp(){
		return comprespo.findAll();
	}

}
