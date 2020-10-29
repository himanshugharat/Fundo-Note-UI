import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { NotesService } from 'src/app/service/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  reset=true
  constructor(private note: NotesService,public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  Title=new FormControl();
  description=new FormControl();
  notePinned=false;
  card=false;
  reminder=false;
 
  addNote(){
    let noteData={
      // "file":"",
       "title":this.Title.value,
       "description":this.description.value,
       // "isPined":"",
       // "isArchived":"",
       // "color":"",
       // "reminder":"",
       // "collaberators":"",
     }
     this.note.addNotes(noteData).subscribe(response => {
      if (response['status'].success == true) {
        this.snackBar.open("note added successfully", 'success')
      }
    },
      error => {
        this.snackBar.open("unable to add plz try again", 'failed')
      }
    )
  
  }

}
