import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { CarUpdate } from '../models/carUpdate';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44389/api/";
  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  } 

  getCarsByBrand(id:number): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getbybrandid?brandid="+id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);  
  }
  
  getCarsByColor(colorId:number): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getbycolorid?colorid="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);  
  }

  
  getCarDetails(id:number): Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?carid="+id
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  } 
  getCarsByFilter(id:number,colorId:number): Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getfilteredcars?brandid="+id+"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }
  getCarDetailsById(carId: number): Observable<ListResponseModel<CarUpdate>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carid='+carId;
    return this.httpClient.get<ListResponseModel<CarUpdate>>(newPath);
  }
  update(car:Car):Observable<ListResponseModel<CarUpdate>>{
    return this.httpClient.post<ListResponseModel<CarUpdate>>(this.apiUrl+"cars/update",car)
  }
}