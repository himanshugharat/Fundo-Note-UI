import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent  {
  hide = true;
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);
  
  getPasswordErrorMsg() {
    return this.Password.hasError('required')
      ? 'Password is Required'
      : 'please enter valid Password';
  }
  constructor(private user: UserService, public snackBar: MatSnackBar) { }
  
  reset() {
    let userData = {
      "newPassword": this.Password.value
    }
    this.user.resetPassword(userData).subscribe(response => {
      console.log(response)
    })
  }
}
