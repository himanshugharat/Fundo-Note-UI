import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http_service/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private id = localStorage.getItem("fundo")
  private _url = "http://fundoonotes.incubation.bridgelabz.com/api/notes/"
  constructor(private http: HttpService) { }

  addNotes(data) {
    let url = this._url+"addNotes"
    return this.http.postService(data,url,true ,{headers:{'Authorization':localStorage.getItem('fundo')}})
  }
  getNotes() {
    let url = this._url+"getNotesList"
    return this.http.getService(url,true ,{headers:{'Authorization':localStorage.getItem('fundo')}})
  }
}

