import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
 
  
  carDetails: CarDetailDto ;
  carImage:CarImage[];
  id:number
  imageUrl:string="https://localhost:44389/"
  
  constructor(private carService:CarService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carid"]){
        this.id=params["carid"]
        this.getCarDetails(params["carid"])
      }
    })
  }


   getCarDetails(carid:number){
    this.carService.getCarDetails(carid).subscribe(response =>{
      console.log(response.data)
      this.carDetails=response.data[0];
      this.carImage=this.carDetails.carImage;
      
     })
   }  


  
  getCurrentImageClass(image: CarImage) {
    if (image == this.carImage[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  getButtonClass(image: CarImage) {
    if (image == this.carImage[0]) {
      return 'active';
    } else {
      return '';
    }}

}


