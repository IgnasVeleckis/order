import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor() { }

  getOrdersList(){
    return [
      {
        firstName: 'John',
        lastName: 'Doe',
        productName: 'Ball',
        productPrice: 15,
        deliveryDate: '2020.11.03'
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        productName: 'Knife',
        productPrice: 10,
        deliveryDate: '2020.10.23'
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        productName: 'Fork',
        productPrice: 20,
        deliveryDate: '2020.08.15'
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        productName: 'Plate',
        productPrice: 5,
        deliveryDate: '2020.11.01'
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        productName: 'Book',
        productPrice: 25,
        deliveryDate: '2020.07.08'
      },
    ]
  }

  
}
