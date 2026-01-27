import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee.interface';
import { Observable } from 'rxjs';
import { Response } from '../models/Response.interface';
import { environment } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private defaultAPI = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.defaultAPI + '/employees');
  }
}
