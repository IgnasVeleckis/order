import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LoginComponent } from './containers/login/login.component';
import { RegistrationComponent } from './containers/registration/registration.component';



@NgModule({
  declarations: [
    LoginFormComponent, 
    RegistrationFormComponent, 
    LoginComponent, 
    RegistrationComponent,
  ],
  imports: [
    CommonModule
    
  ]
})
export class AuthModule { }
