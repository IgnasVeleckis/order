import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {
  @Output() formValue = new EventEmitter<string>()
  constructor() { }

  secondForm = new FormGroup({
    creditSize: new FormControl('', Validators.required),
    creditDuration: new FormControl('', Validators.required),
    creditPaymentDay: new FormControl('', Validators.required),
  })
  back(){
    this.formValue.emit('1')
  }

  changeValue() {
    this.formValue.emit('3')
  }

  secondFormSubmit() {
    console.log(this.secondForm.value);
    this.changeValue()
  }

}
