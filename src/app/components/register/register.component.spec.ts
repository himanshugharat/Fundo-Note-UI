import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RegisterComponent } from './register.component';
import {  UserService } from '../../service/user.service'
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: UserService;
  let httpmock: HttpTestingController
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule,FormsModule],
      providers:[UserService,MatSnackBar,Overlay]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  // it('valid email', () => {
  //   //component.Email.status
  //   expect(component.Email.updateOn).toBeTruthy()
  //   const compiled = fixture.debugElement.nativeElement;
  //   const addressInput = compiled.querySelector('input[id="Email"]');
  //   expect(addressInput).toBeTrue()
    
  // });

  
});

