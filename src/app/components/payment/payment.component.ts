import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { LocalStorageServiceService } from 'src/app/services/local-storage-service.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  carImage:CarImage[]
  id:number;
  expirationDate:number;
  cars:Car
  rental: Rental
  cardNumber: number;
  firstName: string;
  lastName: string;
  expirationMonth: number;
  expirationYear: number;
  cvv: number;
  amountOfPayment: number = 0;
  totalPrice : number 
  totalDay : number

  constructor(private paymentService: PaymentService, private activatedRoute:ActivatedRoute,private carService:CarService, 
    private localStorageService:LocalStorageServiceService, private rentalService:RentalService, 
    private toastrService:ToastrService, private router:Router
    ) { }
    
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if (params["carid"]){
          this.id=params["carid"]
          this.getCarData(params["carid"])
        }
        this.rental=this.localStorageService.getRental()
      })
      
    }


    getCarData(id:number){
      this.carService.getCarDetails(id).subscribe(response =>{
        this.cars = response.data[0]
        this.carImage=this.cars.carImage;
       this.paymentCalculator();})
    }

    paymentCalculator(){
      this.totalDay = (new Date(this.rental.returnDate).getTime() -
      new Date(this.rental.rentDate).getTime()) /
    (1000 * 3600 * 24);
    this.totalPrice = (this.totalDay * this.cars.dailyPrice + (this.cars.dailyPrice*0.50))
    return this.totalPrice
      
    }

    sendRentalToDb() {
      this.localStorageService.getRental();
      this.rentalService.add(this.rental).subscribe(
        (response) => {
          console.log(response);
          this.toastrService.success(response.message, 'Successful');
          this.router.navigate(['cars']);
        },
        (HttpErrorResponse) => {
          this.toastrService.error(HttpErrorResponse.error.message, 'Invalid');
        }
      );
    }

}
