import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from './quote';

@Pipe({
  name: 'daysChecker'
})
export class DaysCheckerPipe implements PipeTransform {

  transform(value: any): any {
  let currentday:Date = new Date(); //get current date and time
  let currentdate:any = new Date(currentday.getFullYear(), currentday.getMonth(), currentday.getDate())
  var dateDifference = Math.abs(value - currentdate) //returns value in miliseconds
  const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
  var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
  var daysChecker = dateDifferenceSeconds/secondsInDay;

  if (daysChecker >= 1 && value < currentdate){
    return daysChecker;
  }else{
    return 0;
  }
}
}