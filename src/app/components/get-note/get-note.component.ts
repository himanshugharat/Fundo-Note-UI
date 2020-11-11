import { Component, Input, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { NotesService } from 'src/app/service/notes.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogNoteComponent } from '../dialog-note/dialog-note.component';
import { SharedService } from '../../service/shared/shared.service'
import { Subscription } from "rxjs"
import { MatChipInputEvent } from '@angular/material/chips';
import { error } from 'protractor';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.scss']
})

export class GetNoteComponent implements OnInit {
  note = []
  isButtonVisible = false
  hoverIndex = -1
  active: boolean
  nonoteCondition = false
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  clickEventSubscription: Subscription;
  constructor(private http: NotesService, public dialog: MatDialog, public shared: SharedService, public snackBar: MatSnackBar) {
    this.clickEventSubscription = this.shared.getEvent().subscribe(() => {
      this.note = []
      this.ngOnInit();
    })

  }

  ngOnInit(): void {
    this.http.getNotes().subscribe(response => {
      for (let i = 0; i < response['data'].data.length; i++) {
        if (response['data'].data[i].isDeleted || response['data'].data[i].isArchived) { }
        else {
          this.note.push(response['data'].data[i]);
        }
      }
      this.note.reverse()
      console.log(this.note)
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
    return (this.note.length == 0) ? this.nonoteCondition = true : this.nonoteCondition = false;
  }
  openDialog(title, description, id) {
    this.dialog.open(DialogNoteComponent, { data: { title: title, description: description, id: id } });
  }

  remove(note): void {
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

}

