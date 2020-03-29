import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {


  @Output() formVal = new EventEmitter<string>()
  constructor() { }

  secondForm = new FormGroup({
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
  })

  back(){
    this.formVal.emit('1')
  }

  changeValue() {
    this.formVal.emit('3')
  }

  secondFormSubmit() {
    console.log(this.secondForm.value);
    this.changeValue()
  }


}
