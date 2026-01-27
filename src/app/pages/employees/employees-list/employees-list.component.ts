import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { Employee } from '../../../models/Employee.interface';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css',
})
export class EmployeesListComponent {
  employees: Employee[] = [];
  paginationPageSize = 5;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      console.log(employees);
    });
  }
  colDef: ColDef[] = [
    {
      headerName: 'Name',
      valueGetter: (params) => params.data.first_name + ' ' + params.data.last_name ,
      sortable: true,
      filter: true,
      resizable: true,
    },

    {
      field: 'email',
      headerName: 'Email',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: 'phone_number',
      headerName: 'Phone Number',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: 'department',
      headerName: 'Department',
      valueGetter: (params) => params.data.department.name,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: 'jobTitle',
      headerName: 'Job Title',
      valueGetter: (params) => params.data.position.name,
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      field: 'accessLevel',
      headerName: 'Access Level',
      valueGetter: (params) => params.data.access_level.name,
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
}
