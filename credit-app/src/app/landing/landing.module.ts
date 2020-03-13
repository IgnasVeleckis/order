import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './containers/landing/landing.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [LandingComponent, ButtonComponent],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
