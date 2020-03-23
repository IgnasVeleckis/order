import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  constructor() { }
  alertValue = '0';

  ngOnInit(){
    console.log(this.alertValue);
  }

  change(event){
    this.alertValue = event;
    console.log(event);
  }

}
