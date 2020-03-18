import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepOne } from '../../../../core/models/step-one.interface'


@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent{
  @Output() formValue = new EventEmitter<string>()
  constructor() { }
  firstName: string;
  lastName: string;
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
    phone: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    house: new FormControl('', Validators.required),
    flat: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required)
  })
  
  changeValue() {
    this.formValue.emit('2')  
    this.gettingFormValues()
  }

  firstFormSubmit() {
    console.log(this.firstForm.value);
    this.changeValue()
  }

  gettingFormValues(){
    this.firstName = this.firstForm.get('firstName').value
    this.lastName = this.firstForm.get('lastName').value
  }

}
