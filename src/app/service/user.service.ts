import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private id = localStorage.getItem("fundo")
  private _url = "http://fundoonotes.incubation.bridgelabz.com/api/user/"
  constructor(private http: HttpClient) {
  }

  registerUser(data) {
    let url = this._url + "userSignUp"
    return this.http.post(url, data)
  }

  loginUser(data) {
    let url = this._url + "login"
    return this.http.post(url, data)
  }

  resetPassword(data) {
    let url = this._url + "reset-password?access_token=" + this.id
    return this.http.post(url, data)
  }

  resetMail(data) {
    let url = this._url + "reset?access_token=" + this.id
    return this.http.post(url, data)
  }
}
