import { Component } from '@angular/core';
import { NavSectionComponent } from '../nav-section/nav-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav-content',
  standalone: true,
  imports: [CommonModule,NavSectionComponent],
  templateUrl: './side-nav-content.component.html',
  styleUrl: './side-nav-content.component.css'
})
export class SideNavContentComponent {
 navSections = [
    {
      title: 'Employees',
      items: [
        { icon: 'users', text: 'Employees', route: '/employees', isActive: true }
      ]
    }
  ];
}
