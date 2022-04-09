import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from './quote';

@Pipe({
  name: 'daysChecker'
})
export class DaysCheckerPipe implements PipeTransform {

  transform(value: any): any {}}
    // let fullDate: Date = new Date()
    // let currentDay: any = new Date (fullDate.getFullYear(), fullDate.getMonth(), fullDate.getDate())
    // let inputDay: any = {{quote.completeDate|date}}
    // var daysDifference = Math.abs(currentDay-InputDay)
    // return null;

//     var inputDate: Date = new Date{{quote.completeDate|date}}
//     var currentdate:any = new Date();
//     var diffDays:any = Math.floor((currentdate - inputDate) / (1000 * 60 * 60 * 24));

//     return diffDays;

//     if (diffDays >= 1 && inputDate < currentdate){
//       return diffDays;
//     }else{
//       return 0;
//     }
//   }

// }
