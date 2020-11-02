import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/notes.service';

@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.scss']
})
export class GetNoteComponent implements OnInit {
  note = []
  isButtonVisible = false
  hoverIndex = -1
  nonoteCondition = false
  constructor(private http: NotesService) { }

  ngOnInit(): void {
    this.http.getNotes().subscribe(re => {
      for (let i = 0; i < re['data'].data.length; i++) {
        this.note.push(re['data'].data[i]);
      }
      this.note.reverse()
      console.log(this.note)
    })

  }
  onHover(i) {
    this.hoverIndex = i
  }
  noNote(){
   return (this.note.length==0)?this.nonoteCondition=true:this.nonoteCondition=false;
  }

}
