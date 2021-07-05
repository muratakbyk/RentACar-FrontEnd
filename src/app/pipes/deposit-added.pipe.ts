import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'depositAdded'
})
export class DepositAddedPipe implements PipeTransform {

  transform(value: number,rate:number): number {
    return value*rate;
  }

}
