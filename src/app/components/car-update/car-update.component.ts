import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastContainerModule, ToastrService } from 'ngx-toastr';
import { CarUpdate } from 'src/app/models/carUpdate';
@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  car:CarUpdate;
  carUpdateForm : FormGroup;
  constructor(private formBuilder:FormBuilder, private toastrService:ToastrService, private carService:CarService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createCarUpdateForm()
    this.activatedRoute.params.subscribe((params)=>{
      if(params["carId"]){
        this.getCarDetailsById(params["carId"])
      }
    })
  }
  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      brandId:["", Validators.required],
      colorId:["", Validators.required],
      carName:["", Validators.required],
      modelYear:["", Validators.required],
      dailyPrice:["", Validators.required]
     
    })
  }
  getCarDetailsById(carId:number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
        this.car = response.data[0];
      }); 
  }
  updateCar(){
    if(this.carUpdateForm.valid){
      let carModel = Object.assign({}, this.carUpdateForm.value)
      carModel.id=this.car.id
      this.carService.update(carModel).subscribe(response =>{
        this.toastrService.success(response.message)
        this.router.navigate([""])
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, "Validation Error")
          }
        }
      })

    } else {
      this.toastrService.error("Missing Form","Warning")
    }    
  }


}
