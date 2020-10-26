import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';

const routes: Routes = [{ path: "register", component: RegisterComponent },
                        { path: "login", component: LoginComponent },
                        { path: "resetpassword/:id", component: ForgotPasswordComponent },
                        { path: "forgot", component: ResetComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
