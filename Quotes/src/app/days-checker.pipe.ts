import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from './quote';

@Pipe({
  name: 'daysChecker'
})
export class DaysCheckerPipe implements PipeTransform {

  transform(value: any): number {
  let currentday:Date = new Date();
  let currentdate:any = new Date(currentday.getFullYear(), currentday.getMonth(), currentday.getDate())
  var dateDifference = Math.abs(value - currentdate) 
  const secondsInDay = 86400
  var dateDiffiInSecs = dateDifference * 0.001
  var daysChecker = dateDiffiInSecs/secondsInDay;

  if (daysChecker >= 1 && value < currentdate){
    return daysChecker;
  }else{
    return 0;
  }
}
}