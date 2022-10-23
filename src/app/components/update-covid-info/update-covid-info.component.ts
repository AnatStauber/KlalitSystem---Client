import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidInfo } from 'src/app/models/covidInfo';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update-covid-info',
  templateUrl: './update-covid-info.component.html',
  styleUrls: ['./update-covid-info.component.css']
})
export class UpdateCovidInfoComponent implements OnInit {

  public customerId :number;
  public covidInfo = new CovidInfo();

  constructor(private router: Router,private activatedRoute: ActivatedRoute,private customerService : CustomerService) { }

  ngOnInit() {
    this.customerId = parseInt(this.activatedRoute.snapshot.params.customerId);
  }

  public updateCovidInfo(): void {
    const observable = this.customerService.updateCovidInfo(this.customerId,this.covidInfo.covid_start,this.covidInfo.covid_end);
    observable.subscribe(covidUpdated => {
        alert("info was updated successfully");
        this.goToProfile();
    }, err => {
      alert("Error! Status: " + err.status + ", Message: " + err.message);
});
  }
  
public goToProfile () :void {
  this.router.navigate(["/customerCovidProfile/" +this.customerId]);
}


}
