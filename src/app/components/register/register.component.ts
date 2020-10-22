import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface UserForm {
  firtName: string;
  lastName: string;
  userName: string;
  password:string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  UserForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.UserForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
     // lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
     // userName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
     // password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.UserForm.controls[controlName].hasError(errorName);
  }
  public createOwner = (ownerFormValue) => {
    if (this.UserForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }}
    private executeOwnerCreation = (ownerFormValue) => {
    //  let owner: UserForm = {
    //    firstName: this.ownerFormValue.firstName
        //dateOfBirth: ownerFormValue.dateOfBirth,
       // address: ownerFormValue.address
     // }
  }

}
