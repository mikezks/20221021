import { Component } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
})
export class FlightSearchComponent {
  from: string = 'Graz';
  to: string = 'Hamburg';
  flights: Flight[] = [];
  selectedFlight: Flight | null = null;
  isDelayedToggle: boolean= true;

  constructor(private flightService: FlightService) {
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  search() {
   this.flightService.find(this.from, this.to)
   .subscribe({
    next: (flights: Flight[]) => this.flights = flights,
    error: (error) => console.log(error),
    complete: () => console.log('complete')
  });
  }

}
