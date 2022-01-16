import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  firstName: any;
  lastName: any;
  position: any;

  constructor(private employeeService: EmployeeService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: string) {
    this.router.navigate(['employee-details', id]);
  }

  editEmployee(id: string) {
    this.router.navigate(['edit-employee', id]);
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }
  Search1() {
    if (this.firstName == "") {
      this.ngOnInit();
    }
    else {
      this.employees = this.employees.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  Search2() {
    if (this.lastName == "") {
      this.ngOnInit();
    }
    else {
      this.employees = this.employees.filter(res => {
        return res.lastName.toLocaleLowerCase().match(this.lastName.toLocaleLowerCase());
      })
    }
  }
  Search3() {
    if (this.position == "") {
      this.ngOnInit();
    }
    else {
      this.employees = this.employees.filter(res => {
        return res.position.toLocaleLowerCase().match(this.position.toLocaleLowerCase());
      })
    }
  }
}

