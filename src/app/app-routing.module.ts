import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerCovidProfileComponent } from './components/customer-covid-profile/customer-covid-profile.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { VaccinateComponent } from './components/vaccinate/vaccinate.component';
import { UpdateCovidInfoComponent } from './components/update-covid-info/update-covid-info.component';
import { GeneralCovidInfoComponent } from './components/general-covid-info/general-covid-info.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "customerProfile/:customerId", component:CustomerProfileComponent },
  { path: "customersList", component:CustomersListComponent },
  { path: "customerCovidProfile/:customerId", component:CustomerCovidProfileComponent },
  { path: "addCustomer", component:AddCustomerComponent },
  { path: "updateCustomer/:customerId", component:UpdateCustomerComponent } ,
  { path: "vaccinateCustomer/:customerId", component:VaccinateComponent },
  { path: "updateCovidInfo/:customerId", component:UpdateCovidInfoComponent },
  { path: "generalCovidInfo", component:GeneralCovidInfoComponent }
];

@NgModule({
  imports: [ CommonModule,
    RouterModule.forRoot(routes,  { enableTracing: true, onSameUrlNavigation:"reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
