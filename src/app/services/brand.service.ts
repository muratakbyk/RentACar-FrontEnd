import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiURL="https://localhost:44389/api/brands/getall"
  newApiUrl="https://localhost:44389/api/"
constructor(private httpClient:HttpClient) { }
getBrands():Observable<ListResponseModel<Brand>> {
  return this.httpClient.get<ListResponseModel<Brand>>(this.apiURL);
 }
 add(brand:Brand):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.newApiUrl+"brands/add",brand)
}
update(brand:Brand):Observable<ListResponseModel<Brand>>{
  return this.httpClient.post<ListResponseModel<Brand>>(this.newApiUrl+"brands/update",brand)
}
getBrandById(brandId: number): Observable<SingleResponseModel<Brand>> {
  let newPath = this.newApiUrl + 'brands/getbyid?id='+brandId;
  return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
}

}
