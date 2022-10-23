import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccine } from 'src/app/models/vaccine';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-vaccinate',
  templateUrl: './vaccinate.component.html',
  styleUrls: ['./vaccinate.component.css']
})
export class VaccinateComponent implements OnInit {
  
  private vaccine = new Vaccine();
  public customerId :number;
  private manufacturers : string[] = ['pfizer','moderna','astrazeneca'];

  constructor(private router: Router,private activatedRoute: ActivatedRoute, private customerService: CustomerService){ }

  ngOnInit() {
    this.customerId = parseInt(this.activatedRoute.snapshot.params.customerId);
    // alert(this.customerId);
  }

  public vaccinate(): void {
    const observable = this.customerService.vaccinateCustomer(this.customerId,this.vaccine.vaccine_date,this.vaccine.vacc_manu);
    observable.subscribe(customerVaccinated => {
        alert("customer was vaccinated successfully");
        this.goToProfile();
    }, err => {
      alert("Error! Status: " + err.status + ", Message: " + err.message);
});

  }

  public goToProfile () {
    const customerId  = parseInt(this.activatedRoute.snapshot.params.customerId);
    this.router.navigate(["/customerCovidProfile/" +customerId]);
  }
}
