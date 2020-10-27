import { Component, OnInit } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private user: UserService,public snackBar: MatSnackBar) { }

  Email = new FormControl('', [Validators.email, Validators.required]);
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }

  getPasswordErrorMessage() {
    return this.Password.hasError('required')
      ? 'Password is Required '
      : 'Password should be minimum of 8 characters';
  }
  ngOnInit(): void {
  }

  login() {
    let userData = {
      "email": this.Email.value,
      "password": this.Password.value
    }
    this.user.loginUser(userData).subscribe(response => {
      localStorage.setItem("fundo", response['id'])
      console.log(response)
      console.log(localStorage.getItem("fundo"))
      if (response) {
        this.snackBar.open("login successfully.",'success')
      }
    })
  }
}
