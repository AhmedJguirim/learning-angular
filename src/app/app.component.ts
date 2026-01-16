import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesListComponent } from './pages/employees/employees-list/employees-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeesListComponent],
   template: `
    <ul>
      <app-employees-list></app-employees-list>
    </ul>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-angular';
}
