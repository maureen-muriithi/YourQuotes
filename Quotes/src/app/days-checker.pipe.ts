import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysChecker'
})
export class DaysCheckerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
