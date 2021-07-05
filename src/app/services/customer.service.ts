import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44389/api/customers/getall";
  newApiUrl="https://localhost:44389/api/";
  constructor(private httpClient:HttpClient) { }
  getCustomers(): Observable<ListResponseModel<Customer>>{
    this.httpClient
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
  getCustomerByUserId(userId:number) : Observable<SingleResponseModel<Customer>> {
    let newPath = this.newApiUrl + "customers/getbyuserid?userId="+userId
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
   }

  
}
 