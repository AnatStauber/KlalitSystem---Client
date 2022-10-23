
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';


@Component({
  selector: 'app-customer-;ist',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  
  title = "Klalit Customers"
  public allCustomers: Customer[];
  public customer : Customer;
  
  // constructor(@Inject(forwardRef(() => CustomerService))private customerService = CustomerService) { }
  constructor(private router:Router, private customerService : CustomerService) { }
 
  
  ngOnInit() {
    let observable = this.customerService.getAllCustomers();
    observable.subscribe(customers => {
      this.allCustomers  = customers}
      , err => {
        alert("Error! Status: " + err.status + ", Message: " + err.message);
  });
  }

  public goToProfile(customerId: number) : void {
      this.router.navigate(["/customerProfile/" + customerId]);
    }

 
}

