import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
{path:"",pathMatch:"full", component:CarComponent},
{path:"cars",component:CarComponent},
{path:"cars/brand/:id",component:CarComponent},
{path:"cars/color/:colorId",component:CarComponent},
{path:"cars/details/:carid",component:CardetailComponent},
{ path: 'cars/cars/details/:carid', component: CardetailComponent},  
{ path: 'brands', component: BrandComponent },
{ path: 'cars/filter/:id/:colorId', component: CarComponent },
{path:"cars/rentals/:carid",component:RentalComponent},
{path:"cars/payment/:carid",component:PaymentComponent},
{path:"cars/add",component:CarAddComponent},
{path:"brands/add",component:BrandAddComponent},
{path:"colors/add",component:ColorAddComponent},
{path:"brands/update/:brandId",component:BrandUpdateComponent},
{path:"cars/update/:carId",component:CarUpdateComponent},
{path:"colors/update/:colorId",component:ColorUpdateComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent}




 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
