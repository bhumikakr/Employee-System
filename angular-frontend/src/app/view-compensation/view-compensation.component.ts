import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { CompensationService } from '../compensation.service';


@Component({
  selector: 'app-view-compensation',
  templateUrl: './view-compensation.component.html',
  styleUrls: ['./view-compensation.component.css']
})
export class ViewCompensationComponent implements OnInit {

  id: string
  employee: Employee
  constructor(private route: ActivatedRoute, private router: Router, private compensationService: CompensationService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.compensationService.getCompById(this.id).subscribe(data => {
      this.employee = data;
    });
  }
  editcompensation(id: string) {
    this.router.navigate(['edit-compensation', id]);
  }
  historycompensation(id: string) {
    this.router.navigate(['history-compensation', id]);
  }
}