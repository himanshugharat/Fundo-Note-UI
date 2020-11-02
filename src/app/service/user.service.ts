import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http_service/http.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private id = localStorage.getItem("fundo")
  private _url = "http://fundoonotes.incubation.bridgelabz.com/api/user/"

  constructor(private http: HttpService) {
  }

  registerUser(data) {
    let url = this._url + "userSignUp"
    return this.http.postService(data, url)
  }

  loginUser(data) {
    let url = this._url + "login"
    return this.http.postService(data, url)
  }

  resetPassword(data) {
    let url = this._url + "reset-password"
    return this.http.postService(data, url, true, { headers: { 'Authorization': localStorage.getItem('fundo') } })
  }

  resetMail(data) {
    let url = this._url + "reset"
    return this.http.postService(data, url, true, { headers: { 'Authorization': localStorage.getItem('fundo') } })
  }

  logout(data) {
    let url = this._url + "logout"
    return this.http.postService(data, url, true, { headers: { 'Authorization': localStorage.getItem('fundo') } })
  }
}
