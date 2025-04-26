import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { LocalStorageService } from '../../../services/localStorage/local-storage.service';
import { Router } from '@angular/router';
import { UserSignal } from '../../../signals/user/user';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router)
  private userSignal = inject(UserSignal)
  private userService = inject(UserService)
  private formBuilder = inject(FormBuilder)
  private localStorageService =inject(LocalStorageService)

  protected formLogin = this.formBuilder.group({
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    password: new FormControl('', Validators.required)
  })

  handleLogin(){
    this.userService.login(this.formLogin.value).
    subscribe(({user}: any) => {
      this.userSignal.set(user)
      this.localStorageService.setUser(user)
      this.router.navigateByUrl('/')
    })
  }

}
