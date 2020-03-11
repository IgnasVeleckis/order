import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CreditComponent } from '../credit/containers/credit/credit.component';
import { LandingComponent } from '../landing/containers/landing/landing.component';
import { CreditHistoryComponent } from '../credit-history/containers/credit-history/credit-history.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent, CreditComponent, LandingComponent, CreditHistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }
