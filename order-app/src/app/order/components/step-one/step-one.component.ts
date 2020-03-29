import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {StepDirection} from "../../models/order.interface";

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {
  @Input() form: FormGroup;
  @Output() formVal = new EventEmitter<StepDirection>()
  constructor() { }
  phoneSelectOptions = [
    '+440',
    '+123',
    '+321',
    '+000'
  ]


  changeValue(step: StepDirection) {
    this.formVal.emit(step);
  }

  firstFormSubmit() {
    console.log(this.form.value);
    this.changeValue('next');
  }
}
