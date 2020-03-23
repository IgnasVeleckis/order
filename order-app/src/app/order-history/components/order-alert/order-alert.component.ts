import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-order-alert',
  templateUrl: './order-alert.component.html',
  styleUrls: ['./order-alert.component.scss']
})
export class OrderAlertComponent implements OnInit {
@Output() alertVal = new EventEmitter();
  constructor() { }

  hideAlert(){
    this.alertVal.emit('0')
  }
  ngOnInit() {
  }

}
