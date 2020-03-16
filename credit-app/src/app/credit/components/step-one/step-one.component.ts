import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent{
  @Output() formValue = new EventEmitter<string>()
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
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      house: new FormControl('', Validators.required),
      flat: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    })
  })
  
  changeValue() {
    this.formValue.emit('2')
  }

  firstFormSubmit() {
    console.log(this.firstForm.value);
    this.changeValue()
  }

  onSubmit(){
    console.log('la')
  }
  
  
}
