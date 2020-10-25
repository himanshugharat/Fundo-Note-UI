import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../style/style.scss', './register.component.scss']
})

export class RegisterComponent implements OnInit {
  hide = true;
  form: FormGroup;
  validName: boolean;
  public emp = [];
  success: boolean
  constructor(private user: UserService) {
  }
  ConfirmpassValidation(control: AbstractControl) {
    if (control && (control.value != null || control.value != undefined)) {
      const passConfirmValue = control.value;
      const passControl = control.root.get('passFormControl')
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== passConfirmValue) {
          return {
            isError: true
          }
        }
      }
    }
  }
  Email = new FormControl('', [Validators.email, Validators.required]);
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,]);
  FirstName = new FormControl("", [
    Validators.pattern('[a-zA-Z]{2,}')]);
  LastName = new FormControl("", [
    Validators.pattern('[a-zA-Z]{2,}')]);
  ConfirmPassword = new FormControl("", [this.ConfirmpassValidation])


  getEmailErrorMsg() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }


  getFirstNameErrorMsg() {
    return this.FirstName.hasError('required')
      ? 'FirstName is Required'
      : 'please enter valid FirstName';
  }

  getLastNameErrorMsg() {
    return this.LastName.hasError('required')
      ? 'LastName is Required'
      : 'please enter valid LastName';
  }

  getPasswordErrorMsg() {
    return this.Password.hasError('required')
      ? 'Password is Required'
      : 'please enter valid Password';
  }
  getConfirmPasswordErrorMsg() {
    this.ConfirmPassword.hasError("ConfirmpassValidation")
      ? 'ConfirmPassword is Required'
      : 'Password and ConfirmPassword do not match';
  }

  ngOnInit(): void { }
  register() {
    let data = {
      "firstName": this.FirstName.value,
      "lastName": this.LastName.value,
      "service": "advance",
      "email": this.Email.value,
      "password": this.Password.value,
      //"token":"q2SrxGHLVjJwdVGfBqr57qgyLzJvnVObrlK4wMUf9ZuSEEib2Nib3HccucCrb6EH"
    }
    JSON.stringify(data)
    console.log(data)
    this.user.registerUser(data).subscribe(data => console.log(data))
  }
}
