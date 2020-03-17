import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-validate',
  templateUrl: './input-validate.component.html',
  styleUrls: ['./input-validate.component.scss']
})
export class InputValidateComponent implements OnInit {
@Input() title: string;
@Input() type: string;
@Input() errorMessage: string;
  constructor() { }

  ngOnInit() {
  }

}
