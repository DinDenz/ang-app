import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, arg: number): string | any {
    if(value.length > arg ) {
      return value.slice(0, arg) + '...';
    } else {
      return value;
    }
    
  }

}
