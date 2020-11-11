import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/service/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  note = []
  nonoteCondition = false
  isButtonVisible = false
  hoverIndex = -1
  constructor(private notesService: NotesService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.notesService.getTrashNote().subscribe(response => {
      for (let i = 0; i < response['data'].data.length; i++) {
        this.note.push(response['data'].data[i]);
      }
      this.note.reverse()
    })
  }
  noNote() {
    return (this.note.length == 0) ? this.nonoteCondition = true : this.nonoteCondition = false;
  }
  onHover(i: number) {
    this.hoverIndex = i
  }
  deleteForever(id: string) {
    let noteData = {
      isDeleted: true,
      noteIdList: [id]
    }
    this.notesService.deleteNoteForever(noteData).subscribe(response => {
      if (response['data'].success == true) {
        this.snackBar.open("note deleted successfully", 'success')
        this.note = []
        this.ngOnInit()
      }
    },
      error => {
        this.snackBar.open("unable to delete plz try again", 'failed')
      })
  }
  restoreDelete(id: string) {
    let noteData = {
      isDeleted: false,
      noteIdList: [id]
    }
    this.notesService.deleteNote(noteData).subscribe(response => {
      if (response['data'].success == true) {
        this.snackBar.open("note restored successfully", 'success')
        this.note = []
        this.ngOnInit()
      }
    },
      error => {
        this.snackBar.open("unable to restore plz try again", 'failed')
      })

  }
}
