import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavItem } from '../../../models/NavItem.interface';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input() item!: NavItem;
}
