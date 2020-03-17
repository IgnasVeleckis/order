import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { InputValidateComponent } from './components/input-validate/input-validate.component';



@NgModule({
  declarations: [ButtonComponent, IconComponent, InputComponent, InputValidateComponent],
  imports: [
    CommonModule
  ],
  exports: [IconComponent, ButtonComponent, InputComponent, InputValidateComponent]
})
export class SharedModule {

 }
