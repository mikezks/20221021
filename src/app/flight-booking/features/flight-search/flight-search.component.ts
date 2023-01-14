import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Flight } from '../../../entities/flight';
import { FlightService } from '../../data-access/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
})
export class FlightSearchComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit, AfterContentChecked {
  from: string = 'Graz';
  to: string = 'Hamburg';
  flights: Flight[] = [];
  selectedFlight: Flight | null = null;
  isDelayedToggle: boolean= true;
  basket: Record<number, boolean> = {
    1: true,
    4: true,
    5: true,
  }
  subscriptions = new Subscription();
  fromValidCities = [
    'Graz', 'Hamburg', 'Rio'
  ];

  constructor(private flightService: FlightService) {
    this.subscriptions.add(
      timer(0, 2_000).subscribe(console.log)
    );
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.subscriptions.unsubscribe();
  }
  ngOnInit(): void {
    console.log('ngOnInit');
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

  selectedChangeHandler(id: number, event: any) {
    this.basket[id] = event;

  }

}
