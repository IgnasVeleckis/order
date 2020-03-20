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
      creditSize: 10000,
      creditPayday: 15,
      creditDuration: 24
    },
    {
      firstName: 'Jim',
      lastName: 'Halpert',
      creditSize: 2000,
      creditPayday: 10,
      creditDuration: 12
    },
    {
      firstName: 'Dwight',
      lastName: 'Schrute',
      creditSize: 9000,
      creditPayday: 20,
      creditDuration: 24
    },
    {
      firstName: 'Angela',
      lastName: 'Kinsey',
      creditSize: 1500,
      creditPayday: 5,
      creditDuration: 36
    },
    {
      firstName: 'Kevin',
      lastName: 'Malone',
      creditSize: 5000,
      creditPayday: 25,
      creditDuration: 72
    },
  ]
  constructor() { }

  ngOnInit() {
    
  }

  alert(msg){
    console.log(msg)
  }

}
