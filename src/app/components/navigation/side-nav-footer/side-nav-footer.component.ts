import { Component } from '@angular/core';
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/User.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav-footer',
  standalone: true,
  imports: [CommonModule,UserProfileComponent],
  templateUrl: './side-nav-footer.component.html',
  styleUrl: './side-nav-footer.component.css'
})
export class SideNavFooterComponent {
 currentUser: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }
}
