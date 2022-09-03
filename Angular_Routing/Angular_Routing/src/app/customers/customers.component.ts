import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CUSTOMERS } from '../mocks/Customer-mocks';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  /**
   * Subscribing to the CustomerService
   */

  getCustomers(): void{
    this.customerService.getCustomers().subscribe(
    customers => 
    this.customers = customers
    )
  }

}
