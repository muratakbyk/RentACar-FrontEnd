import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44389/api/colors/getall";
  newApiUrl="https://localhost:44389/api/"
  constructor(private httpClient:HttpClient) { }
  getColors(): Observable<ListResponseModel<Color>>{
    this.httpClient
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }

  add(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.newApiUrl+"colors/add",color)
  }
  getColorById(colorId: number): Observable<SingleResponseModel<Color>> {
    let newPath = this.newApiUrl + 'colors/getbyid?id='+colorId;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }

  update(color:Color):Observable<ListResponseModel<Color>>{
    return this.httpClient.post<ListResponseModel<Color>>(this.newApiUrl+"colors/update",color)
  }
}
