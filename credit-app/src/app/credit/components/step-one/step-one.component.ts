import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent{
  @Output() formValue = new EventEmitter<string>()
  constructor() { }

  
  changeValue() {
    this.formValue.emit('2')
    
  }
  
  
}
