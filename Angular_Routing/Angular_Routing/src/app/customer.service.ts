import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CUSTOMERS } from './mocks/Customer-mocks';
import { Customer } from './models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  /**
   * This method is used to fetch all the customers.
   * The data is fetched as an Observable
   * @return CUSTOMERS
   */

  getCustomers(): Observable<Customer[]>{
    return of(CUSTOMERS);
  }
}
