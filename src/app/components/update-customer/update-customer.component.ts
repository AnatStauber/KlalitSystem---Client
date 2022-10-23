import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  private customer = new Customer();

  constructor(private router: Router,private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    const customerId = parseInt(this.activatedRoute.snapshot.params.customerId);
    let observable = this.customerService.getCustomer(customerId);
    observable.subscribe(gotCustomer=>{
      this.customer = gotCustomer;
    })
  }

  public updateCustomer(): void {
    const observable = this.customerService.updateCustomer(this.customer);
    observable.subscribe(customerUpdated => {
        alert("customer was updated successfully");
        this.goToProfile();
    });

  }

  public goToProfile () {
  this.router.navigate(["/customerProfile/" + this.customer.id]);
}

}
