import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  cars: Car[] = [];
  dataLoaded = false;
  imgUrl: string="https://localhost:44389/"
  currentCar: Car;
  id:number;
  colorId:number;
  brands:Brand[] = [];
  colors:Color[] = [];
  filterText="";
  

  constructor(private carService:CarService,
    private colorService : ColorService,
    private brandService: BrandService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{

    if(params["id"] && params["colorId"])
    {
      this.getCarsByFilter(params["id"],params["colorId"])
    }
    if(params["id"]){
      this.getCarsByBrand(params["id"])
    }
    else if (params['colorId']) {
      this.getCarsByColor(params['colorId']);
    } 
    else{
      this.getCars()
      
    }
    this.getColors();
    this.getBrands();
  })
   
  }

  getCars(){
    
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
    
  }
 
  getCarsByBrand(id:number){
    
    this.carService.getCarsByBrand(id).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
    
  }

  getCarsByColor(colorId:number){
    
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
    
  }
  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  getCarsByFilter(id:number,colorId:number){
    this.carService.getCarsByFilter(id,colorId).subscribe(response=>{
      this.cars=response.data;
    });
}
getBrands(){
  this.brandService.getBrands().subscribe(respone => {
    this.brands = respone.data;
  })
}

getColors(){
  this.colorService.getColors().subscribe(response => {
    this.colors = response.data;
  })
}

getSelectedBrand(id:number){
  if (this.id == id)
  {
    return true;
  }
   else
  {
    return false;
  }
}

getSelectedColor(id:number){
  if (this.colorId == id) 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

}