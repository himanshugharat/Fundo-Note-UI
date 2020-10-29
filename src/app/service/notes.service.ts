import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private id = localStorage.getItem("fundo")
  private _url = "http://fundoonotes.incubation.bridgelabz.com/api/notes/"
  constructor(private http: HttpClient) { }

  addNotes(data) {
    let url = this._url + "addNotes?access_token=" +this.id
    return this.http.post(url, data)
  }
}

