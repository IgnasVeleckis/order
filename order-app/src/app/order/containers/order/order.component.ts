import {Component} from '@angular/core';
import {StepDirection} from "../../models/order.interface";
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  stepsForms: FormArray;

  constructor(
    private fb: FormBuilder,
  ) {
    this.stepsForms = this.fb.array(
      [
        {one: this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
          })},
        {two: this.fb.group({})},
        {three: this.fb.group({})},
        {four: this.fb.group({})},
        ]
    );
  }

  step = 1;

  changeStep(event: StepDirection) {
    if (event === 'next') {
      this.step = this.step + 1;
    }
    if (event === 'previous') {
      this.step = this.step - 1;
    }
  }

}
