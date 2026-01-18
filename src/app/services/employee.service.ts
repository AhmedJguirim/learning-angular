import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    // get data from public folder employees.json
    return this.http.get<Employee[]>('data/employees.json');
  }
}
