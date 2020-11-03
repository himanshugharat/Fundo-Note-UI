import { Component, OnInit,Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { NotesService } from 'src/app/service/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-note',
  templateUrl: './dialog-note.component.html',
  styleUrls: ['./dialog-note.component.scss']
})
export class DialogNoteComponent implements OnInit {
  title 
  description 
  constructor(@Inject(MAT_DIALOG_DATA)public data:any,public noteService:NotesService,public snackBar:MatSnackBar ) { }

  ngOnInit(): void {
  }
  changeDesc(value){
    console.log(value)
    this.description=value
  }
  changeTitle(value){
    this.title=value
  }
updateNote(){
  let noteData={
    "noteId":this.data.id,
    "title": this.title,
    "description": this.description
  }
  console.log(noteData)
  this.noteService.updateNote(noteData).subscribe(response => {
    if (response['data'].success == true) {
      window.location.reload()
      console.log(response)
      this.snackBar.open("note added successfully", 'success')
    }
  },
    error => {
      console.log(error)
      this.snackBar.open("unable to add plz try again", 'failed')
    }
  )
}
}