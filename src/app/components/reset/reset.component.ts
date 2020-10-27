import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  errors;
  constructor(private user: UserService, public snackBar: MatSnackBar) { }
  Email = new FormControl('', [Validators.email, Validators.required]);
  ngOnInit(): void {
  }

  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }

  reset() {
    let emailData = {
      "email": this.Email.value
    }
    return this.user.resetMail(emailData).subscribe(response => {
      console.log(response)
      if (response['success'] == true) {
        this.snackBar.open("email send succssefully", 'success')
      }
    },
      error => {
        this.errors = error;
      }
    )
    if (this.errors) {
      this.snackBar.open("email not send.", 'failed')
    }
  }
}

