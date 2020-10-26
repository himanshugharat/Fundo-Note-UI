import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../style/style.scss','./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true;
  
constructor(private user:UserService) { }
  
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
  
login(){
  let data={
    "email":this.Email.value,
    "password":this.Password.value
  }
  this.user.loginUser(data).subscribe(res=> {localStorage.setItem("fundo",res['id'])
console.log(res)
console.log(localStorage.getItem("fundo"))
if(res){
  alert("login successfully.")
}
})
}
}
