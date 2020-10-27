import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  typesOfOperation: string[] = ['Note', 'Reminder', 'Edit lable', 'Archive', 'Bin'];
  constructor() { }

  ngOnInit(): void {
  }

}
