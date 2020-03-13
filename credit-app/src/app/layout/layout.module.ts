import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/containers/landing/landing.component';
import { CreditModule } from '../credit/credit.module';
import { CreditHistoryModule } from '../credit-history/credit-history.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent,  LandingComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CreditModule,
    CreditHistoryModule
  ]
})
export class LayoutModule { }
