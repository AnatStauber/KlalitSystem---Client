import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  public customer : Customer;
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    const customerId = parseInt(this.activatedRoute.snapshot.params.customerId);
    let observable = this.customerService.getCustomer(customerId);
    observable.subscribe(gotCustomer=>{
      this.customer = gotCustomer;
    })
  }

  public goToCovidProfile(customerId: number) : void {
    this.router.navigate(["/customerCovidProfile/" + customerId]);
  }

  public goToUpdate(customerId: number) : void {
    this.router.navigate(["/updateCustomer/" + customerId]);
  }

  public goToCustomersList() : void {
    this.router.navigate(["/customersList" ]);
  }

  public deleteCustomer(customerId:number){
    let observable =this.customerService.deleteCustomer(customerId);
    observable.subscribe(deletedCustomer => {
      alert("customer #"+customerId+" was deleted succesfully");
      this.router.navigate(["home"]);
      }, err => {
        alert("Error! Status: " + err.status + ", Message: " + err.message);
  });
  }
  public clickMethod() : void{
    const id = parseInt(this.activatedRoute.snapshot.params.customerId);
    if(confirm("Are you sure to delete customer # "+id)) {
      this.deleteCustomer(id);
    }
  }
}
