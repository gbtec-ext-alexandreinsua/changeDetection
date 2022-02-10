import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retailprice',
})
export class RetailpricePipe implements PipeTransform {
  transform(price: number): number {
    console.log('%cPIPE : ' + price, 'background: black; color:white');
    return Math.round(110 * price) / 100;
  }
}
