import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http_service/http.service';
var headers=new HttpHeaders({
  Authorization:localStorage.getItem('token')
});
@Injectable({
  providedIn: 'root'
})

export class NotesService {
  private _url = "http://fundoonotes.incubation.bridgelabz.com/api/notes/"
  constructor(private http: HttpService) {
    
  }
   

  addNotes(data) {
  
    let url = this._url + "addNotes"
    return this.http.postService(data, url, true, { headers: headers })
  }
  getNotes() {
    let url = this._url + "getNotesList"
    return this.http.getService(url, true, { headers: headers })
  }
  updateNote(data) {
    let url = this._url + "updateNotes"
    return this.http.postService(data, url, true, { headers: headers })
  }
  deleteNote(data) {
    let url = this._url + "trashNotes"
    return this.http.postService(data, url, true, { headers: headers})
  }
  getTrashNote() {
    let url = this._url + "getTrashNotesList"
    return this.http.getService(url, true, { headers: headers })
  }
  archiveNote(data) {
    let url = this._url + "archiveNotes"
    return this.http.postService(data, url, true, { headers: headers })
  }
  getArchiveNote() {
    let url = this._url + "getArchiveNotesList"
    return this.http.getService(url, true, { headers: headers })
  }
  deleteNoteForever(data) {
    let url = this._url + "deleteForeverNotes"
    return this.http.postService(data, url, true, { headers: headers })
  }
  changeNotecolor(data) {
    let url = this._url + "changesColorNotes"
    return this.http.postService(data, url, true, { headers: headers })
  }
  addNoteLable(data,parm) {
    let url = this._url +parm+"/noteLabels"
    return this.http.postService(data, url, true, { headers: headers })
  }
}

