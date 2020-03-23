import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent {
  @Output() formVal = new EventEmitter<string>()
  constructor() { }

  thirdForm = new FormGroup({
    a: new FormControl('', Validators.required),
    b: new FormControl('', Validators.required),
    c: new FormControl('', Validators.required),
  })
  back(){
    this.formVal.emit('2')
  }

  changeValue() {
    this.formVal.emit('4')
  }

  thirdFormSubmit() {
    console.log(this.thirdForm.value);
    this.changeValue()
  }

}
