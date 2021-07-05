import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateday'
})
export class CalculatedayPipe implements PipeTransform {

  transform(value: Date,rate:Date): number {
    return ((value.getTime()-rate.getTime())/86400000)
  }

}
