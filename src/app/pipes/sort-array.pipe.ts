import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray',
  pure: false,
})
export class SortArrayPipe implements PipeTransform {

  transform(arr: any[], value: string): any[] {
    arr.sort((a: any, b: any) => a[value] - b[value]);
    return arr;
  }

}
