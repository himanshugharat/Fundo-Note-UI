import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/resetPassword/resetPassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { forgotPassword } from './components/forgotPassword/forgotPassword.component';
import { CreateNotesComponent } from './components/createNotes/createNotes.component';
import { GetNoteComponent } from './components/get-note/get-note.component';

const routes: Routes = [{ path: "register", component: RegisterComponent },
{ path: "login", component: LoginComponent },
{ path: "", component: LoginComponent },
{ path: "resetpassword/:id", component: ResetPasswordComponent },
{ path: "forgot", component: forgotPassword },
{ path: "getnote", component: GetNoteComponent },
{ path: "dashboard", component: DashboardComponent, children: [{ path: "notes", component: CreateNotesComponent }] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
