import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { CreditComponent } from './containers/credit/credit.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [StepOneComponent, StepTwoComponent, CreditComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreditModule { }
