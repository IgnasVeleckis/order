import { Component} from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent  {

  constructor() { }
  formValue: string = '1';

  change(event){
    this.formValue = event;
  }


}
