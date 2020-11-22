import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/notes.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogNoteComponent } from '../dialog-note/dialog-note.component';
import { SharedService } from '../../service/shared/shared.service'
import { Subscription } from "rxjs"
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.scss']
})

export class GetNoteComponent implements OnInit {
  note = []
  pinnedNote=[]
  unPinnedNote=[]
  pin: boolean
  isButtonVisible = false
  hoverIndex = -1
  active: boolean
  nonoteCondition = false
  label = []
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  labelName
  clickEventSubscription: Subscription;
  constructor(private http: NotesService, public dialog: MatDialog, public shared: SharedService, public snackBar: MatSnackBar, public route: ActivatedRoute) {
    this.clickEventSubscription = this.shared.getEvent().subscribe(() => {
      this.note = []
      this.ngOnInit();
    })
  }

  ngOnInit(): void {
    this.getNote()
  }
  getNote() {
    this.labelName = null
    this.labelName = this.route.snapshot.paramMap.get('label')
    this.http.getNotes().subscribe(response => {
      for (let i = 0; i < response['data'].data.length; i++) {
        if (response['data'].data[i].isDeleted || response['data'].data[i].isArchived) { }
        else {
          if (this.labelName != null) {
            for (let j = 0; j < response['data'].data[i].noteLabels.length; j++) {
              if (response['data'].data[i].noteLabels[j].label === this.labelName) {
                this.note.push(response['data'].data[i]);
              }
            }
          } else {
            this.note.push(response['data'].data[i]);
          }
        }
      }
      this.note.forEach(element => {
        this.note.sort((a, b) => a.isPined - b.isPined)
      });
      this.note.reverse()
      console.log(this.note)
      this.note.forEach(element => {
        for (let i = 0; i < element.noteLabels.length; i++)
          this.label.push(element.noteLabels[i].label)
      });
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index
      }
      this.label = this.label.filter(onlyUnique)
      this.pinnedNote=[]
      this.unPinnedNote=[]
      this.note.forEach(element => {
        console.log(element.isPined)
        if(element.isPined){
          this.pinnedNote.push(element)
        }else{
        this.unPinnedNote.push(element)
        }
       // this.note.sort((a, b) => a.isPined - b.isPined)
      });
      console.log(this.pinnedNote)
    console.log(this.unPinnedNote)
    })
    
    
  }

  onHover(i) {
    this.hoverIndex = i
  }

  displayPannel(i) {
    if (this.hoverIndex == i) {
      this.active = true
    }
    else {
      this.active = false
    }
  }

  noNote() {
    this.shared.change(this.label)
    return (this.note.length == 0) ? this.nonoteCondition = true : this.nonoteCondition = false;
  }
  openDialog(title, description, id) {
    this.dialog.open(DialogNoteComponent, { data: { title: title, description: description, id: id } });
  }

  removeLable(note): void {
    this.note.forEach(element => {
      const index = element.noteLabels.indexOf(note);
      if (index >= 0) {
        console.log(element.noteLabels[index].id)
        this.http.deleteNoteLable(element.id, element.noteLabels[index].id).subscribe(response => {
          this.snackBar.open("note label deleted", 'success')
        },
          error => {
            this.snackBar.open("unable to delete label", 'failed')
          })
        element.noteLabels.splice(index, 1);
      }
    });
  }
  removeReminder(index): void {
    console.log(index)
    let noteData = {
      reminder: [],
      noteIdList: [index]
    }
    this.http.removeReminder(noteData).subscribe(response => {
      console.log(response)
      if (response['data'].success == true) {
        this.snackBar.open("reminder  deleted", 'success')
        console.log(response)
        this.shared.sendEvent();
      }
      else {
        this.snackBar.open("reminder unable to delete", 'failed')
      }
    })
  }
  addPin(index) {
    let noteData = {
      isPined: !this.pin,
      noteIdList: [index]
    }
    console.log(noteData)
    this.http.pinNote(noteData).subscribe(response => {
      if (response['data'].success == true) {
        this.snackBar.open("note pinned successfully", 'success')
        this.shared.sendEvent();
      }
    },
      error => {
        this.snackBar.open("unable to pin note plz try again", 'failed')
      })
  }


}

