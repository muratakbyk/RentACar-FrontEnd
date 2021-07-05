import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatetotalprice'
})
export class CalculatetotalpricePipe implements PipeTransform {

  transform(value: Date,rate:Date, price:number): number {
    return ((Date.parse(value.toString())-Date.parse(rate.toString())) /86400000 ) * (price) + (price*0.50)
  }
}
