import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerService } from 'src/app/services/customer.service';
import { HttpErrorInterceptor } from './http-error.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerCovidProfileComponent } from './components/customer-covid-profile/customer-covid-profile.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { VaccinateComponent } from './components/vaccinate/vaccinate.component';
import { UpdateCovidInfoComponent } from './components/update-covid-info/update-covid-info.component';
import { GeneralCovidInfoComponent } from './components/general-covid-info/general-covid-info.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerProfileComponent,
    CustomersListComponent,
    CustomerCovidProfileComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    VaccinateComponent,
    UpdateCovidInfoComponent,
    GeneralCovidInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule, // Needed for ngModel
    RouterModule, // Needed for the routing mechanism
    BrowserAnimationsModule
  ],
  providers: [CustomerService,{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
