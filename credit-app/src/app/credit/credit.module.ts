import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { CreditComponent } from './containers/credit/credit.component';
import { SharedModule } from '../shared/shared.module';
import { StepThreeComponent } from './components/step-three/step-three.component';



@NgModule({
  declarations: [StepOneComponent, StepTwoComponent, CreditComponent, StepThreeComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CreditModule { }
