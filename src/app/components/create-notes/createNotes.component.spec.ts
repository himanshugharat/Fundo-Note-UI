import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotesComponent } from './createNotes.component';

describe('NotesComponent', () => {
  let component: CreateNotesComponent;
  let fixture: ComponentFixture<CreateNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
