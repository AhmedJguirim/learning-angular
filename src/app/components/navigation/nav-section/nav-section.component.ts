import { Component, Input } from '@angular/core';
import { NavItem } from '../../../models/NavItem.interface';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from "../nav-item/nav-item.component";

@Component({
  selector: 'app-nav-section',
  standalone: true,
  imports: [CommonModule, NavItemComponent],
  templateUrl: './nav-section.component.html',
  styleUrl: './nav-section.component.css'
})
export class NavSectionComponent {
  @Input() title: string = '';
  @Input() items: NavItem[] = [];
}
