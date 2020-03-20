import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { OrderHistoryComponent } from './containers/order-history/order-history.component';



@NgModule({
  declarations: [TableComponent, TitleComponent, OrderHistoryComponent],
  imports: [
    CommonModule
  ]
})
export class OrderHistoryModule { }
