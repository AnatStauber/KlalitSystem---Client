import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  private customer = new Customer();

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
  }

  public addCustomer(): void {
    const observable = this.customerService.createCustomer(this.customer);
    observable.subscribe(customerAdded => {
        alert("customer was added successfully");
        this.goToProfile();
    });

  }

  public goToProfile () {
  this.router.navigate(["/customerProfile/" + this.customer.id]);
}
}
