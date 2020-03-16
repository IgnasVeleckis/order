import { Component,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent {
  @Output() formValue = new EventEmitter<string>()
  constructor() { }


  back(){
    this.formValue.emit('2')
  }

}
