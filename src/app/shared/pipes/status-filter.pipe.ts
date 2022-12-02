import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from 'src/app/entities/flight';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(value: Array<Flight>, isDelayed: boolean): Array<Flight> {
    return value.filter(x => x.delayed === isDelayed)
  }

}
