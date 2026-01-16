import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    // get data from public folder employees.json
    this.http.get('data/employees.json').subscribe((employees) => {
      console.log(employees);
    });
  }
}
