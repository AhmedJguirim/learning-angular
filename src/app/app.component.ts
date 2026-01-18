import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesListComponent } from './pages/employees/employees-list/employees-list.component';
import { SideNavComponent } from './components/navigation/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent],
   templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-angular';
}
