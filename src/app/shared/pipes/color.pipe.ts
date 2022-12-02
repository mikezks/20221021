import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor'
})
export class ColorPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {

    return value? 'red': 'green';
  }

}
