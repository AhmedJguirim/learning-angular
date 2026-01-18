import { Component, Input } from '@angular/core';
import { User } from '../../../models/User.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input() user!: User;

  getInitials(): string {
    if (!this.user || !this.user.name) return '';
    const names = this.user.name.split(' ');
    return names.map(n => n.charAt(0).toUpperCase()).join('');
  }
}
