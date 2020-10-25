import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url="http://fundoonotes.incubation.bridgelabz.com/api/user/"
  constructor(private http:HttpClient) { 
  }
  registerUser(data){
    let url=this._url+"userSignUp"
     return this.http.post(url,data)
  }
  loginUser(data){
    let url=this._url+"login"
    return this.http.post(url,data)
  }
  resetPassword(data){
    let id="Xb2uK8uQA3jUQ2U4tB3ykFFAEgxXrIYVRERuhrhYA4kqiQWYLNYIjWK0JaBa4WyY"
    //let url="http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password?access_token=c58tnkNoKfKgAAFL9TY8HILT2LQUN7mV7j6koQ4PXerFAnooXnES2yZDanmwq0WD"
    let url
    return this.http.post(url,data)
  }
}
