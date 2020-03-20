import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditHistoryComponent } from './containers/credit-history/credit-history.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [CreditHistoryComponent, TableComponent, TitleComponent],
  imports: [
    CommonModule
  ]
})
export class CreditHistoryModule { }
