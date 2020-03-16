import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent{
  @Output() formValue = new EventEmitter<string>()
  constructor() { }

  manoForma = new FormControl('');

  firstForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })
  
  changeValue() {
    this.formValue.emit('2')
  }

  firstFormSubmit() {
    console.log(this.firstForm.value);
    this.changeValue()
  }
  
  
}
