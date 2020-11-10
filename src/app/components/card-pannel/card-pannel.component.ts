import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/service/notes.service';
import { SharedService } from 'src/app/service/shared/shared.service';

@Component({
  selector: 'app-card-pannel',
  templateUrl: './card-pannel.component.html',
  styleUrls: ['./card-pannel.component.scss']
})


export class CardPannelComponent implements OnInit {
  constructor(private noteService: NotesService, public snackBar: MatSnackBar, private shared: SharedService) { }
  @Input() noteId
  labelName=new FormControl("")
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
        this.shared.sendEvent();
      }
    },
      error => {
        this.snackBar.open("unable to move to bin plz try again", 'failed')
      }
    )
  }

  archiveNote() {
    let noteData = {
      isArchived: true,
      noteIdList: [this.noteId]
    }
    this.noteService.archiveNote(noteData).subscribe(response => {
      if (response['data'].success == true) {
        this.snackBar.open("note moved to archive", 'success')
        console.log(response)
        this.shared.sendEvent();
      }
    },
      error => {
        this.snackBar.open("unable to move to archive plz try again", 'failed')
      }
    )
  }

  addNoteLable() {
  let lableData={
    label:this.labelName.value,
    isDeleted:false
  }
  this.noteService.addNoteLable(lableData,this.noteId).subscribe(response=>{
    if (response) {
      this.snackBar.open("note lable  added", 'success')
      console.log(response)
      this.shared.sendEvent();
    }
  },
    error => {
      this.snackBar.open("unable to add to note lable plz try again", 'failed')
    }
  )
  
  }
}
