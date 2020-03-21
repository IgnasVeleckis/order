import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { OrderHistoryComponent } from './containers/order-history/order-history.component';
import { OrderAlertComponent } from './components/order-alert/order-alert.component';



@NgModule({
  declarations: [TableComponent, TitleComponent, OrderHistoryComponent, OrderAlertComponent],
  imports: [
    CommonModule
  ]
})
export class OrderHistoryModule { }
