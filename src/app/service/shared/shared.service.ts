import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new Subject<any>();
  private data = new BehaviorSubject([]);
  dataArray=this.data.asObservable();
  constructor() { }
  sendEvent() {
    //this.subject.next();
  }
  getEvent(): Observable<any> {
    return this.subject.asObservable();
  }
change(array:Array<any>){
  this.data.next(array)
}
}

