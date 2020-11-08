import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http_service/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private _url = "http://fundoonotes.incubation.bridgelabz.com/api/notes/"
  constructor(private http: HttpService) { }

  addNotes(data) {
    let url = this._url + "addNotes"
    return this.http.postService(data, url, true, { headers: { 'Authorization': localStorage.getItem('token') } })
  }
  getNotes() {
    let url = this._url + "getNotesList"
    return this.http.getService(url, true, { headers: { 'Authorization': localStorage.getItem('token') } })
  }
  updateNote(data) {
    let url = this._url + "updateNotes"
    return this.http.postService(data, url, true, { headers: { 'Authorization': localStorage.getItem('token') } })
  }
  deleteNote(data) {
    let url = this._url + "trashNotes"
    return this.http.postService(data, url, true, { headers: { 'Authorization': localStorage.getItem('token') } })
  }
  getTrashNote() {
    let url = this._url + "getTrashNotesList"
    return this.http.getService(url, true, { headers: { 'Authorization': localStorage.getItem('token') } })
  }
  archiveNote(data) {
    let url = this._url + "archiveNotes"
    return this.http.postService(data, url, true, { headers: { 'Authorization': localStorage.getItem('token') } })
  }
  getArchiveNote() {
    let url = this._url + "getArchiveNotesList"
    return this.http.getService(url, true, { headers: { 'Authorization': localStorage.getItem('token') } })
  }
  deleteNoteForever(data) {
    let url = this._url + "deleteForeverNotes"
    return this.http.postService(data, url, true, { headers: { 'Authorization': localStorage.getItem('token') } })
  }
  changeNotecolor(data) {
    let url = this._url + "changesColorNotes"
    return this.http.postService(data, url, true, { headers: { 'Authorization': localStorage.getItem('token') } })
  }
}

