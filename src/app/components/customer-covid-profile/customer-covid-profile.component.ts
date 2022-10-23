import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidInfo } from '../../models/covidInfo';
import { Customer } from '../../models/customer';
import { Vaccine } from '../../models/vaccine';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-covid-profile',
  templateUrl: './customer-covid-profile.component.html',
  styleUrls: ['./customer-covid-profile.component.css']
})
export class CustomerCovidProfileComponent implements OnInit {

  public customer : Customer;
  public covidInfo : CovidInfo;
  public vaccines: Array<Vaccine> = [];
  public customerId: number;
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    this.customerId = parseInt(this.activatedRoute.snapshot.params.customerId);
    let observable = this.customerService.getCovidInfo(this.customerId);
    observable.subscribe(gotCovidInfo=>{
      this.covidInfo = gotCovidInfo;
      this.vaccines = this.covidInfo.vaccine_info;
    }
    , err => {
      alert("Error! Status: " + err.status + ", Message: " + err.message);
});
    
  }

  public goToCustomersList() : void {
    this.router.navigate(["/customersList" ]);
  }
  
  public goToVaccinate() : void {
    this.router.navigate(["/vaccinateCustomer/"+this.customerId ]);
  }
  public goToUpdateCovid() : void {
    this.router.navigate(["/updateCovidInfo/"+this.customerId ]);
  }
  
}
