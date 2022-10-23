import { Component, OnInit } from '@angular/core';
import { toObservable } from '@angular/forms/src/validators';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-general-covid-info',
  templateUrl: './general-covid-info.component.html',
  styleUrls: ['./general-covid-info.component.css']
})
export class GeneralCovidInfoComponent implements OnInit {

  public amountVaccinated : number;
  public allCustomers: Customer[];
  public customersCount : number;
  public percentVaccinated : number;
  public nonVaccinated : number;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    let observable= this.customerService.countVaccinated();
    observable.subscribe(count=>{
      this.amountVaccinated = count;
    });
}


}
