import { Component, OnInit,OnChanges, SimpleChanges ,OnDestroy,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss','../../../style/style.scss']
})
export class ForgotPasswordComponent implements OnInit {
hide=true;
Password = new FormControl('', [
  Validators.minLength(8),
  Validators.required,
]);
getPasswordErrorMsg(){
  return this.Password.hasError('required')
    ? 'Password is Required'
    : 'please enter valid Password';
}
  constructor(private user:UserService) { }


   ngOnInit(): void {console.log("oninit")}
  
 reset(){
  let data={
   "newPassword":this.Password.value
  }   
  this.user.resetPassword(data).subscribe(re=>{console.log(re)
  })
  
 }
}
