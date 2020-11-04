import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/service/notes.service';

@Component({
  selector: 'app-card-pannel',
  templateUrl: './card-pannel.component.html',
  styleUrls: ['./card-pannel.component.scss']
})
export class CardPannelComponent implements OnInit {

  constructor(private noteService: NotesService, public snackBar: MatSnackBar) { }
  @Input() noteId
  ngOnInit(): void {
  }
  trashNote() {
    let noteData = {
      isDeleted: true,
      noteIdList: [this.noteId]
    }
    this.noteService.deleteNote(noteData).subscribe(response => {
      if (response['data'].success == true) {
        this.snackBar.open("note moved to bin", 'success')
        console.log(response)
      }
    },
      error => {
        this.snackBar.open("unable to move to bin plz try again", 'failed')
      }
    )
  }
}
