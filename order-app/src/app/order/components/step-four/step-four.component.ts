import { Component,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent{
  @Output() formValue = new EventEmitter<string>()
  constructor() { }

  
  placeholder = 'Lorem ipsum'


  back(){
    this.formValue.emit('2')
  }

}
