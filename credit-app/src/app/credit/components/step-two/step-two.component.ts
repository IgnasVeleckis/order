import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {
  @Output() formValue = new EventEmitter<string>()
  constructor() { }

  back(){
    this.formValue.emit('1')
  }

  changeValue() {
    this.formValue.emit('3')
  }

}
