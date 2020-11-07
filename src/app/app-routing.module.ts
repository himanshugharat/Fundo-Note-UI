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
import { TrashBinComponent } from './components/trash-bin/trash-bin.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ColorPalletComponent } from './color-pallet/color-pallet.component';

const routes: Routes = [{ path: "register", component: RegisterComponent },
{ path: "login", component: LoginComponent },
{ path: "", component: LoginComponent },
{ path: "resetpassword/:id", component: ResetPasswordComponent },
{ path: "forgot", component: forgotPassword },
{ path: "icon-pannel", component: CardPannelComponent },
{ path: "color-pallet", component: ColorPalletComponent },
{
  path: "dashboard", component: DashboardComponent, children:
    [{ path: "notes", component: CreateNotesComponent },
    { path: "getnote", component: GetNoteComponent },
    { path: "bin", component: TrashBinComponent },
    { path: "archive", component: ArchiveComponent },]
},
{ path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
