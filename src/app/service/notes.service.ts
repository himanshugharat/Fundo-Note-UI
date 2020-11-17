import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http_service/http.service';

@Injectable({
  providedIn: 'root'
})

export class NotesService {
  _url = environment.apiUrl + "notes/"
  constructor(private http: HttpService) {
  }

  addNotes(data) {
    let url = this._url + "addNotes"
    return this.http.postService(data, url)
  }
  getNotes() {
    let url = this._url + "getNotesList"
    return this.http.getService(url)
  }
  updateNote(data) {
    let url = this._url + "updateNotes"
    return this.http.postService(data, url)
  }
  deleteNote(data) {
    let url = this._url + "trashNotes"
    return this.http.postService(data, url)
  }
  getTrashNote() {
    let url = this._url + "getTrashNotesList"
    return this.http.getService(url)
  }
  archiveNote(data) {
    let url = this._url + "archiveNotes"
    return this.http.postService(data, url)
  }
  getArchiveNote() {
    let url = this._url + "getArchiveNotesList"
    return this.http.getService(url)
  }
  deleteNoteForever(data) {
    let url = this._url + "deleteForeverNotes"
    return this.http.postService(data, url)
  }
  changeNotecolor(data) {
    let url = this._url + "changesColorNotes"
    return this.http.postService(data, url)
  }
  addNoteLable(data, parm) {
    let url = this._url + parm + "/noteLabels"
    return this.http.postService(data, url)
  }
  deleteNoteLable(noteId, lableId) {
    let url = this._url + noteId + "/noteLabels/" + lableId
    return this.http.deleteService(url)
  }
}

