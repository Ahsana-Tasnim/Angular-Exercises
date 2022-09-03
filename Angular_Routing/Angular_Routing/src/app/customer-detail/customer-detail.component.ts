import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CUSTOMERS } from '../mocks/Customer-mocks';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer;
  message: string;

  constructor( private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers(): void {
    let idParam = this.route.snapshot.paramMap.get('id');
    const id: number = parseInt(idParam);

    if(isNaN(id)){
      this.message = `Error: ${idParam} is not a number`;
    }else{
      this.customer = CUSTOMERS.find(c => c.id == id);
    }
  }

}
