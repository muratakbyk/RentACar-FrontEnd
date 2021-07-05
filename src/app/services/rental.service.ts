import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44389/api/rentals/getrentaldetails";
  postApiUrl="https://localhost:44389/api/rentals/";
  constructor(private httpClient:HttpClient) { }
  getRentals(): Observable<ListResponseModel<Rental>>{
    this.httpClient
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
  getRentalsByCarId(id:number):Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"byid?id="+id
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  // addRental(rental:Rental):Observable<ResponseModel> {
  //   let newPath = this.apiUrl + 'add';
  //   this.httpClient.post<ResponseModel>(newPath, rental).subscribe();
  // }
  add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.postApiUrl + 'add',rental);
  }
  
  
}
