import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/notes.service';

@Component({
  selector: 'app-trash-bin',
  templateUrl: './trash-bin.component.html',
  styleUrls: ['./trash-bin.component.scss']
})
export class TrashBinComponent implements OnInit {
note=[]
nonoteCondition=false
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.getTrashNote().subscribe(response => {
      for (let i = 0; i < response['data'].data.length; i++) {
        this.note.push(response['data'].data[i]);
      }
      this.note.reverse()
      console.log(this.note)
      console.log(response)
    })
  }
  noNote() {
    return (this.note.length == 0) ? this.nonoteCondition = true : this.nonoteCondition = false;
  }

}
