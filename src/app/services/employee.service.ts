import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee.interface';
import { Observable } from 'rxjs';
import { Response } from '../models/Response.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private defaultAPI = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Response<Employee[]>> {
    return this.http.get<Response<Employee[]>>(this.defaultAPI + '/employees');
  }
}
