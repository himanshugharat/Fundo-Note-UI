import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { forgotPassword } from './components/forgot-password/forgot-password.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { GetNoteComponent } from './components/get-note/get-note.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardPannelComponent } from './components/card-pannel/card-pannel.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { AuthGuardService } from './service/auth/auth-guard.service';


const routes: Routes = [{ path: "register", component: RegisterComponent },
{ path: "login", component: LoginComponent },
{ path: "", component: LoginComponent },
{ path: "resetpassword/:id", component: ResetPasswordComponent },
{ path: "forgot", component: forgotPassword },

{
  path: "dashboard", component: DashboardComponent, children:
    [{ path: "notes", component: CreateNotesComponent,canActivate:[AuthGuardService] },
    { path: "notes/:label", component: CreateNotesComponent,canActivate:[AuthGuardService] },
    { path: "getnote", component: GetNoteComponent ,canActivate:[AuthGuardService]},
    { path: "bin", component: TrashComponent,canActivate:[AuthGuardService] },
    { path: "archive", component: ArchiveComponent ,canActivate:[AuthGuardService]},]
,canActivate:[AuthGuardService]},
{ path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
