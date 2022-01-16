import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class CompensationService {

  private baseURL = "http://localhost:8080/api/v1/compensations";

  constructor(private httpClient: HttpClient) { }

  getCompList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  getCompById(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  addComp(id: string, employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${id}`, employee);
  }

  editComp(id: string, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);

  }
  history(id: string, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }
}
