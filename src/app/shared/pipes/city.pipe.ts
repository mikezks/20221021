import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { AirportService } from 'src/app/flight-booking/data-access/airport.service';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  constructor(private airportService: AirportService){}

  transform(value: string, fmt: string): Observable<string> {
    return this.airportService.transform(value, fmt);
  }

}
