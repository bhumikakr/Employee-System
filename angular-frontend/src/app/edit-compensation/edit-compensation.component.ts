import { Component, OnInit } from '@angular/core';
import { CompensationService } from '../compensation.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-compensation',
  templateUrl: './edit-compensation.component.html',
  styleUrls: ['./edit-compensation.component.css']
})
export class EditCompensationComponent implements OnInit {

  id: string;
  employee: Employee = new Employee();
  editcomp: FormGroup;
  constructor(private compensationService: CompensationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.editcomp = new FormGroup(
      {
        type: new FormControl('', [Validators.required]),
        amount: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),

      }
    );

    this.id = this.route.snapshot.params['id'];

    this.compensationService.getCompById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.compensationService.editComp(this.id, this.employee).subscribe(data => {
      this.goToCompList(this.id);
    }
      , error => console.log(error));
  }

  goToCompList(id: string) {
    this.router.navigate(['view-compensation', id]);
  }
}
