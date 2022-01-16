import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee = new Employee();
  addform: FormGroup;
  // startDate = new Date(2004, 0, 1);
  constructor(private employeeService: EmployeeService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.addform = new FormGroup(
      {
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        bod: new FormControl('', [Validators.required]),
        position: new FormControl('', [Validators.required]),

      }
    );
  }

  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
  validateAge(age) {
    var input = age.value;
    if (input >= 18) {
      return true;
    }
    else {
      alert("Invalid Age" + input);
      return false;
    }
  }
}
