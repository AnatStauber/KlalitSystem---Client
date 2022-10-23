import { Customer } from 'src/app/models/customer';
import { Location } from '@angular/common';
import { CovidInfo } from '../models/covidInfo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {
 
  
  private customer =  new Customer();


  constructor(private http: HttpClient, private location: Location) { }

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:8080/KlalitSystem/customers/getAll");
  }

  public createCustomer (customer: Customer): Observable<Response> {
    return this.http.put<Response>("http://localhost:8080/KlalitSystem/customers/createNewCustomer", customer);
  }

  public getCustomer(customerId: number): Observable<Customer> {
    return this.http.get<Customer>("http://localhost:8080/KlalitSystem/customers/"+customerId );
  } 

  public updateCustomer (customer: Customer): Observable<Response>{
    return this.http.put<Response>("http://localhost:8080/KlalitSystem/customers/update", customer);
  }

  public deleteCustomer  (customerId: number): Observable<Response>{
    return this.http.delete<Response>("http://localhost:8080/KlalitSystem/customers/delete/"+customerId);
  }

  public getCovidInfo (customerId: number) : Observable<CovidInfo>{
    return this.http.get<CovidInfo>("http://localhost:8080/KlalitSystem/customers/getCovidInfo/" +customerId);
  }

  public vaccinateCustomer (customerId : number, vaccine_date : Date, vacc_manu: string) :  Observable<Response>{
    // return this.http.put<Response>("http://localhost:8080/KlalitSystem/customers/vaccinate/"+customerId+"/"+vaccine_date+"/"+vacc_manu);
  return this.http.get<Response>("http://localhost:8080/KlalitSystem/customers/vaccinate/"+customerId+"/"+vaccine_date+"/"+vacc_manu);
  }

  public countVaccinated () : Observable<number> {
    return this.http.get<number>("http://localhost:8080/KlalitSystem/customers/countVaccinated");
  }

  public updateCovidInfo (customerId : number, start_date : Date, end_date: Date) : Observable<Response> {
    return this.http.get<Response>("http://localhost:8080/KlalitSystem/customers/updateCovidInfo/"+customerId+"/"+start_date+"/"+end_date);
  }

}
