import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderHistoryService } from 'src/core/services/order-history/order-history.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output() alertVal = new EventEmitter<string>();
  tableData = [];

  constructor(private _orderHistoryService: OrderHistoryService) { }
  ngOnInit() {
    this.tableData = this._orderHistoryService.getOrdersList();
  }

  alert(msg){
    console.log(msg);
    this.showAlert();
  }

  removeOrder(){

  }

  showAlert(){
    this.alertVal.emit('1');
  }



}
