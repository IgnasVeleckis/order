import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {
  @Output() formVal = new EventEmitter<string>()
  constructor() { }
  phoneSelectOptions = [
    '+440',
    '+123',
    '+321',
    '+000'
  ]


  firstForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required)
  })

  
  changeValue() {
    this.formVal.emit('2')  
  }

  firstFormSubmit() {
    console.log(this.firstForm.value);
    this.changeValue()
  }



}
