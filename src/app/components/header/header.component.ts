import { Component, inject } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [MatSidenavModule,MatIconModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router)
  logoutUser(){
    this.router.navigateByUrl('/auth/login')
  }
}
