import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    console.log('EmployeesListComponent ngOnInit');
    this.employeeService.getEmployees();
  }

}
