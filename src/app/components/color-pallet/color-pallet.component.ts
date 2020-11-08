import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../service/notes.service';
import { SharedService } from '../../service/shared/shared.service';

@Component({
  selector: 'app-color-pallet',
  templateUrl: './color-pallet.component.html',
  styleUrls: ['./color-pallet.component.scss']
})

export class ColorPalletComponent implements OnInit {
color
@Input() noteIdcard
  constructor(private noteService:NotesService,public shared:SharedService) { }

  ngOnInit(): void {
  }
  getColor(color){
    console.log(color) 
    console.log(this.noteIdcard) 
    let noteColorData = {
      color: color,
      noteIdList: [this.noteIdcard]
    }
    this.noteService.changeNotecolor(noteColorData).subscribe(response=>{
      console.log(response)
      this.shared.sendEvent();
    })
  }

}
