import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NotesService } from 'src/app/service/notes.service';

@Component({
  selector: 'app-get-note',
  templateUrl: './get-note.component.html',
  styleUrls: ['./get-note.component.scss']
})
export class GetNoteComponent implements OnInit,OnChanges {
note=[]
  constructor(private http:NotesService) { }
  ngOnChanges(changes: SimpleChanges): void {
   this.http.getNotes().subscribe(re=>{
      for(let i=0;i<re['data'].data.length;i++){
      this.note.push(re['data'].data[i]);
      }
      console.log(this.note)
    })
  }

  ngOnInit(): void {
    this.http.getNotes().subscribe(re=>{
      for(let i=0;i<re['data'].data.length;i++){
      this.note.push(re['data'].data[i]);
      }
      console.log(this.note)
    })

  }

}
