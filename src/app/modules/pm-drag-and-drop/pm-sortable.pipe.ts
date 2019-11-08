import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pmSortable'
})
export class PmSortablePipe implements PipeTransform {

  transform(value: any[]): any[] {
    value.sort((a: any, b: any): number => {
      if (a.sortNumber === undefined || b.sortNumber === undefined || a.sortNumber === b.sortNumber) {
        return 0;
      }
      if (a.sortNumber > b.sortNumber) {
        return 1;
      }
      return -1;
    });
    return value;
  }

}
