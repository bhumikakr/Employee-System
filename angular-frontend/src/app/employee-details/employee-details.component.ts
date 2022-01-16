import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: string
  employee: Employee
  constructor(private route: ActivatedRoute, private router: Router, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }
  viewcompensation(id: string) {
    this.router.navigate(['view-compensation', id]);
  }
  addcompensation(id: string) {
    this.router.navigate(['add-compensation', id]);
  }

}
