import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/notes.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogNoteComponent } from '../dialog-note/dialog-note.component';
import { SharedService } from '../../service/shared/shared.service'
import { Subscription } from "rxjs"
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

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
  clickEventSubscription: Subscription;
  constructor(private http: NotesService, public dialog: MatDialog, public shared: SharedService) {
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
      console.log(response)
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

  
}

