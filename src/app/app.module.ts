import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { VatAddedPipe  } from './pipes/VatAdded.Pipe';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { DepositAddedPipe } from './pipes/deposit-added.pipe';
import { ToastrModule } from "ngx-toastr";
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CardComponent } from './components/card/card.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CalculatedayPipe } from './pipes/calculateday.pipe';
import { CalculatetotalpricePipe } from './pipes/calculatetotalprice.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BackgroundpicComponent } from './components/backgroundpic/backgroundpic.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    CardetailComponent,
    VatAddedPipe,
    CarFilterComponent,
    FilterPipePipe,
    DepositAddedPipe,
    CardComponent,
    PaymentComponent,
    CalculatedayPipe,
    CalculatetotalpricePipe,
    
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    BrandUpdateComponent,
    CarUpdateComponent,
    ColorUpdateComponent,
    LoginComponent,
    RegisterComponent,
    BackgroundpicComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [  {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
