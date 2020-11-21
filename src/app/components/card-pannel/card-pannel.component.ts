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
  @Input() noteId
  @Input() labelArray
  @Input() noteArray
  labelName = new FormControl("")
  colaboratorEmail = new FormControl("")
  colaboratorFirstName = new FormControl("")
  colaboratorLastName = new FormControl("")
  colaboratorUserId = new FormControl("")
  label = this.labelName.value
  reminder
  constructor(private noteService: NotesService, public snackBar: MatSnackBar, private shared: SharedService) {
  }

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
    console.log(this.label.value)
    if (this.labelName.value) {
      this.label = this.labelName.value
    }
    let lableData = {
      label: this.label,
      isDeleted: false
    }
    this.noteService.addNoteLable(lableData, this.noteId).subscribe(response => {
      if (response) {
        this.snackBar.open("note lable  added", 'success')
        this.shared.sendEvent();
        this.shared.getEvent()
      }
    },
      error => {
        this.snackBar.open("unable to add to note lable plz try again", 'failed')
      }
    )
  }
  setLabelName(labelName) {
    console.log(labelName)
    this.label = labelName
  }
  addCollaborator() {
    let colabData = {
      email: this.colaboratorEmail.value,
      firstName: this.colaboratorFirstName.value,
      lastName: this.colaboratorLastName.value,
      userId: this.colaboratorUserId.value
    }
    this.noteService.addNoteCollaborator(colabData, this.noteId).subscribe(response => {
      if (response['data'].success == true) {
        this.snackBar.open("collaborator  added", 'success')
        console.log(response)
        this.shared.sendEvent();
      }
      else {
        this.snackBar.open("collaborator unable to added", 'failed')
      }
    })
  }
  removeCollaborator(userId) {
    this.noteService.deleteCollaborator(this.noteId, userId).subscribe(response => {
      if (response['data'].success == true) {
        this.snackBar.open("collaborator  deleted", 'success')
        console.log(response)
        this.shared.sendEvent();
      }
      else {
        this.snackBar.open("collaborator unable to delete", 'failed')
      }
    })
  }
  setReminder(value) {
    let date: Date = new Date()
    if (value == "today") {
      date.setHours(20)
      this.reminder = date.toUTCString()
      console.log(date.toUTCString())
    }
    if (value == "next") {
      date.setDate(date.getDate() + (1 + 7 - date.getDay()) % 7)
      this.reminder = date.toUTCString()
      console.log(date.toUTCString())
    }
    if (value == "tomorrow") {
      date.setDate(date.getDate() + 1);
      date.setHours(20)
      console.log(date.toUTCString())
      this.reminder = date.toUTCString()
    }
  }
  setReminderToCard() {
    let noteData = {
      reminder: [this.reminder],
      noteIdList: [this.noteId]
    }
this.noteService.addReminder(noteData).subscribe(response=>{
  console.log(response)
  if (response['data'].success == true) {
    this.snackBar.open("reminder  added", 'success')
    console.log(response)
    this.shared.sendEvent();
  }
  else {
    this.snackBar.open("reminder unable to add", 'failed')
  }
})
  }
}

// this.todayDate = {
//   reminder: [this.date],
//   isPined: false,
//   isArchived: false,
//   isDeleted: false,
//   noteIdList: [this.card.id],
//   userId: 
// };
