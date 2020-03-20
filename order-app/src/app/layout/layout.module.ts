import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/containers/landing/landing.component';
import { OrderModule } from '../order/order.module';
import { OrderHistoryModule } from '../order-history/order-history.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent,  LandingComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    OrderModule,
    OrderHistoryModule
  ]
})
export class LayoutModule { }
