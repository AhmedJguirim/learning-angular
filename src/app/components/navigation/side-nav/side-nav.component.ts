import { Component } from '@angular/core';
import { SideNavHeaderComponent } from "../side-nav-header/side-nav-header.component";
import { SideNavContentComponent } from "../side-nav-content/side-nav-content.component";
import { SideNavFooterComponent } from "../side-nav-footer/side-nav-footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule,SideNavHeaderComponent, SideNavContentComponent, SideNavFooterComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

}
