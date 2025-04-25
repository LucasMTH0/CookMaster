import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private formBuilder = inject(FormBuilder);
  private userService = inject(UserService);
  protected formRegister = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required, Validators.minLength(5)
    ]),
    repeatPassword: new FormControl('', [
      Validators.required, Validators.minLength(5)
    ]),
    dateCreated: new FormControl('')
  })

  checkSamePassword(): boolean{
    const { password, repeatPassword } = this.formRegister.value
    return password === repeatPassword ? true : false
  }

  handleRegister(){
    if(this.checkSamePassword()){
      console.log("form: ", this.formRegister.value)
      this.formRegister.controls['dateCreated'].setValue(String(new Date))
      this.userService.create(this.formRegister.value).subscribe(
        (result) => {
          console.log(result)
        }
      )
    }
  }
}
