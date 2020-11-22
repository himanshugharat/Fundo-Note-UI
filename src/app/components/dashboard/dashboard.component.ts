import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared/shared.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  isButtonVisible = true;
  label=[]
  isExpanded=true
  isMenuOpen=true
  contentMargin = 240;
  token = localStorage.getItem('token')
  name = localStorage.getItem('name')
  email = localStorage.getItem('email')
  constructor(private http: UserService, public snackBar: MatSnackBar, public route: Router,public shared:SharedService) {
   this.shared.dataArray.subscribe(array=> this.label=array)
   }

  ngOnInit(): void {
  }
  onToolbarMenuToggle(){
    this.isMenuOpen=!this.isMenuOpen
    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  
  }
  logout() {
    let data = {}
    this.http.logout(data).subscribe(response => {
      if (!response) {
        this.snackBar.open("logout successfully.", 'success')
        localStorage.clear()
        this.route.navigate(['login'])
      }
    }, error => {
      this.snackBar.open("logout unsuccessfully.", 'failed')
    })
  }

  // changeVisiblity() {
  //   return this.isButtonVisible = !this.isButtonVisible
  // }

  // checkVisiblity() {
  //   return this.isButtonVisible
  // }

}
//car@llubed.com