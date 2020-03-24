import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sidebarState = '0';
  constructor() { }

  ngOnInit() {
  }

  changeVal(event){
    if(event){
      this.sidebarState = '1';
    }else{
      this.sidebarState = '0';
    }
  }


}
