import { Component, inject } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { UserSignal } from '../../signals/user/user';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';
@Component({
  selector: 'app-header',
  imports: [MatSidenavModule,MatIconModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router)
  protected userSignal = inject(UserSignal)
  private localStorageService = inject(LocalStorageService)

  logoutUser(){
    this.userSignal.clear()
    this.localStorageService.clear()
    this.router.navigateByUrl('/auth/login')
  }
}
