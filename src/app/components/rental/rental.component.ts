import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { DepositAddedPipe } from 'src/app/pipes/deposit-added.pipe';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';
import { RentalService } from 'src/app/services/rental.service';
import { PaymentComponent } from '../payment/payment.component';
@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  [x: string]: any;
  rentAvailable=false
  payment:PaymentComponent
  rentaldate = new Date()
  carid:number
  cars:Car
  rentDate: Date ;
  returnDate: Date ;
  carImage:CarImage[]
  id:number;
  rentals: Rental[] = [];
  dataLoaded = false;
  imageUrl:string="https://localhost:44389/"
  totalPrice:number
  calculateDay: number
  rentalAddForm :FormGroup;
  customer : Customer;
  customers : Customer[]=[];
  
  constructor(private rentalService:RentalService,
    private carService:CarService, 
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastrService: ToastrService,
    private formBuilder:FormBuilder, 
    private localStorageService:LocalStorageServiceService,
    private customerService:CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carid"]){
        this.id=params["carid"]
        this.getRentalsByCarId(params["carid"])
        this.getCarPicture(params["carid"])
        let currentUserId = parseInt(this.localStorageService.getCurrentUserId(),10)
        this.getCustomerByUserId(currentUserId);
        this.createRentalAddForm()
      }

    })
    
  }

  getRentals(){
    
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
      this.dataLoaded=true;
    }) }
  getRentalsByCarId(id:number){
    this.rentalService.getRentalsByCarId(id).subscribe(response=>{
      this.rentals = response.data
      this.dataLoaded = true;
    })}
  getCarPicture(id:number){
    this.carService.getCarDetails(id).subscribe(response =>{
      this.cars = response.data[0]
      this.carImage=this.cars.carImage;})}
  rent() {

  

}

createRentalAddForm(){
  this.rentalAddForm = this.formBuilder.group({
    rentDate : ["",Validators.required],
    returnDate : ["",Validators.required],
  })
}

addRental(){
  if(this.rentalAddForm.valid){
    let rentalModel = Object.assign({carId:this.cars.id, customerId:this.customer.customerId},this.rentalAddForm.value)
    console.log(rentalModel)
    this.localStorageService.addRental(rentalModel)
    this.toastrService.success("You are redirecting to the payment");
    setTimeout(() => 
    {
      this.router.navigate(['/cars/payment/'+this.cars.id]);    },
    2000);    
  } else {
    this.toastrService.error("Missing form","Invalid")
  }    
}


getCustomerByUserId(id:number) {
  this.customerService.getCustomerByUserId(id).subscribe((response) => {
     this.customer=response.data
      console.log(response.data)
    });
}

}
