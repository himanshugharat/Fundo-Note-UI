import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { CreateNotesComponent } from './create-notes.component';
import { NotesService } from '../../service/notes.service'
import {MatSnackBar} from '@angular/material/snack-bar' 
import {Overlay} from '@angular/cdk/overlay'
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { from } from 'rxjs';
fdescribe('NotesComponent', () => {
  let component: CreateNotesComponent;
  let fixture: ComponentFixture<CreateNotesComponent>;
  let service: NotesService;
  let httpmock: HttpTestingController
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule ,HttpClientTestingModule,ReactiveFormsModule,FormsModule],
      declarations: [ CreateNotesComponent ],
      providers:[NotesService,MatSnackBar,Overlay]
      
    })
    
    .compileComponents();
    
  });

  beforeEach(() => {
   
    fixture = TestBed.createComponent(CreateNotesComponent);
    service = TestBed.inject(NotesService);
    httpmock = TestBed.get(HttpTestingController)
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should add note', () => {   
    const testNote={
      "title":"hello",
      "description": "orld"
    }
    service.addNotes(testNote).subscribe((addedPost)=>{
      expect(addedPost).toBe(testNote)
    })
    const req=httpmock.expectOne(`${service._url}addNotes`);
    expect(req.request.method).toBe('POST')
    req.flush(testNote)
  });
  it('pin the note',()=>{
    expect(component.changeNotePinned()).toBe(true)
  });
  it('title input to form',()=>{
    expect(component.title.value).toBeNull()
    let email=component.title.setValue('nicato6850@rvemold.com')
    expect(component.title.valid).toBeTruthy()
    let invalidEmail=component.title.setValue('ni')
    expect(component.title.valid).toBeFalsy()
  })
});
