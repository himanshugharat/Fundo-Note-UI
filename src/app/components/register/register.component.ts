import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../style/style.scss','./register.component.scss']
})

export class RegisterComponent implements OnInit {
  hide = true;
  form: FormGroup;
  validName:boolean;
  constructor(private fb: FormBuilder,private http:HttpClient) {
    this.form = this.fb.group({
      firstName: ["", 
        Validators.pattern('[a-zA-Z]{2,}')],
      lastName: ["", 
        Validators.pattern('[a-zA-Z]{2,}')],
      email: ["", 
        Validators.email],
      password: ["", 
        Validators.pattern('[A-Za-z0-9\\d!$%@#£€*?&]{8,}$')],
        Confirmpassword: ["", ConfirmpassValidation],
    })
    function ConfirmpassValidation(control: AbstractControl) {
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
    this.validName=this.form.controls.firstName.hasError('required')
    this.http.get("http://fundoonotes.incubation.bridgelabz.com/api/user/service").toPromise().then(data=>{
      console.log(data)
    })
  }
  
  

  ngOnInit(): void {
  }

}
