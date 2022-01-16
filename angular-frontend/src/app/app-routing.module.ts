import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewCompensationComponent } from './view-compensation/view-compensation.component';
import { EditCompensationComponent } from './edit-compensation/edit-compensation.component';
import { AddCompensationComponent } from './add-compensation/add-compensation.component';
import { HistoryCompensationComponent } from './history-compensation/history-compensation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'logout', component: HomeComponent },
  { path: 'view-compensation/:id', component: ViewCompensationComponent },
  { path: 'edit-compensation/:id', component: EditCompensationComponent },
  { path: 'add-compensation/:id', component: AddCompensationComponent },
  { path: 'history-compensation/:id', component: HistoryCompensationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }