import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableData = [
    {
      firstName: 'John',
      lastName: 'Doe',
      productName: 'Ball',
      productPrice: 15,
      deliveryDate: '2020.11.03'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      productName: 'Knife',
      productPrice: 10,
      deliveryDate: '2020.10.23'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      productName: 'Fork',
      productPrice: 20,
      deliveryDate: '2020.08.15'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      productName: 'Plate',
      productPrice: 5,
      deliveryDate: '2020.11.01'
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      productName: 'Book',
      productPrice: 25,
      deliveryDate: '2020.07.08'
    },
  ]
  constructor() { }

  ngOnInit() {
    
  }

  alert(msg){
    console.log(msg)
  }

  x(){
    console.log('x')
  }

}
