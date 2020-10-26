import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private user: UserService) { }
  Email = new FormControl('', [Validators.email, Validators.required]);
  ngOnInit(): void {
  }
  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }
  reset() {
    let data = {
      "email": this.Email.value
    }
    return this.user.resetMail(data).subscribe(re => console.log(re))
  }
}

//http://localhost:4200/resetpassword/DTmPwZYVJw2aC8SZQ67Jl9INLVei3hSuU8AuJcHoL34RWRR6iA6dbRvcnDvO4UEq
