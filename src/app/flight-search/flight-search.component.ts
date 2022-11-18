import { Component } from '@angular/core';
import { Flight } from '../entities/flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
})
export class FlightSearchComponent {

  from: string = 'Graz';
  to: string = 'Hamburg';
  flights: Flight[] = [];

  search() {
    this.flights = [
      {
        id: 1,
        from: 'Graz',
        to: 'Hamburg',
        date: '2023-3-1 22:22:22.222',
        delayed: false
      },
      {
        id: 2,
        from: 'Graz',
        to: 'Hamburg',
        date: '2023-4-1 22:22:22.222',
        delayed: false
      }
    ]
  }

}
