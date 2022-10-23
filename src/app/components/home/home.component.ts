
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = "Klalit Customers"
  public allCustomers: Customer[];
  public customer : Customer = new Customer();
  public customerId: number;
  
  // constructor(@Inject(forwardRef(() => CustomerService))private customerService = CustomerService) { }
  constructor(private router:Router) { }
 
  
  ngOnInit() {
  }


  public goToCustomersList() : void {
      this.router.navigate(["/customersList"]);
    }

    public goToACustomer() : void {
      const id = this.customer.id;
      this.router.navigate(["customerProfile/"+id]);
    }
    public goToGeneralInfo() : void {
      this.router.navigate(["generalCovidInfo"]);
    }
    

    public addCustomer() : void {
      this.router.navigate(["/addCustomer"]);
    }
}
