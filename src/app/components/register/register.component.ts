import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  hide = true;
  form: FormGroup;
  constructor(private fb: FormBuilder,private http:HttpClient) {
    this.form = this.fb.group({
      firstFormControl: ["", 
        Validators.pattern('[a-zA-Z]{2,}')],
      lastFormControl: ["", 
        Validators.pattern('[a-zA-Z]{2,}')],
      emailFormControl: ["", 
        Validators.email],
      passFormControl: ["", 
        Validators.pattern('[A-Za-z0-9\\d!$%@#£€*?&]{8,}$')],
      passConfirmFormControl: ["", Validatepass],
    })
    function Validatepass(control: AbstractControl) {
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
    this.http.get("http://fundoonotes.incubation.bridgelabz.com/api/user/service").toPromise().then(data=>{
      console.log(data)
    })
  }
  
  
  onubmit() {
    console.log(this.form.value)
  }
  ngOnInit(): void {
  }

}
