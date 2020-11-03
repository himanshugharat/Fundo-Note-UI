import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotesService } from 'src/app/service/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notes',
  templateUrl: './createNotes.component.html',
  styleUrls: ['./createNotes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  reset = true
  constructor(private note: NotesService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  title = new FormControl();
  description = new FormControl();
  notePinned = false;
  card = false;
  reminder = false;

  addNote() {
    let noteData = {
      "title": this.title.value,
      "description": this.description.value
    }
    this.note.addNotes(noteData).subscribe(response => {
      if (response['status'].success == true) {
        window.location.reload()
        this.snackBar.open("note added successfully", 'success')
      }
    },
      error => {
        this.snackBar.open("unable to add plz try again", 'failed')
      }
    )

  }

  changeNotePinned() {
    return this.notePinned = !this.notePinned
  }

}
