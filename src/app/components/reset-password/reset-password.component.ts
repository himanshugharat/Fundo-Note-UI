import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent  {
  hide = true;
  errors;
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
    },
    error => {
      this.snackBar.open("error please check inputs.",'failed',{duration:2000})
  })
  }
}
