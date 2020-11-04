import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pannel',
  templateUrl: './card-pannel.component.html',
  styleUrls: ['./card-pannel.component.scss']
})
export class CardPannelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getvalue(){
    console.log("ok")
  }

}
