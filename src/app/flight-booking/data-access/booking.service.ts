import { Flight } from 'src/app/entities/flight';
import { Passenger, PassengerService } from './../../passenger/passenger.service';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of } from 'rxjs';
import { FlightService } from './flight.service';


export interface Booking {
  passengerId: number;
  flightId: number;
}

export interface BookingState {
  bookings: Booking[];
  flights: Flight[];
  passengers: Passenger[];
}

export interface BookingViewModel {
  passengerName: string;
  flightTitle: string;
  flightId: number;
  date: string;
}


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  viewModel: BookingViewModel[] = [{
    passengerName: '',
    flightTitle: '',
    flightId: 0,
    date: new Date().toISOString()
  }];

  constructor(
    private flightService: FlightService,
    private passengerService: PassengerService) {}

  find(passengerId?: number, flightId?: number): Observable<Booking[]> {
    return of([
      {
        passengerId: 1,
        flightId: 3
      },
      {
        passengerId: 1,
        flightId: 5
      },
      {
        passengerId: 2,
        flightId: 3
      },
      {
        passengerId: 2,
        flightId: 4
      }
    ]);
  }

  getBookingState(): Observable<BookingState> {
    return forkJoin({
      bookings: this.find(),
      flights: this.flightService.find('Hamburg', 'Graz'),
      passengers: this.passengerService.find('', '')
    });
  }

  updateViewModel(): Observable<BookingViewModel[]> {
    return this.getBookingState().pipe(
      map((state: BookingState): BookingViewModel[] =>
        state.bookings.map(
          (booking: Booking): BookingViewModel => this.mapBookingWithStateToViewModel(booking, state)
        )
      )
    );
  }

  private mapBookingWithStateToViewModel(booking: Booking, state: BookingState): BookingViewModel {
    const passenger: Passenger | undefined = state.passengers
      .find(
        p => p.id === booking.passengerId
      );
    const flight: Flight | undefined = state.flights
      .find(
        f => f.id === booking.flightId
      );

    return {
      passengerName: (passenger?.lastname + ', ' + passenger?.firstname),
      flightTitle: (flight?.from + ' - ' + flight?.to),
      flightId: flight?.id || NaN,
      date: flight?.date || ''
    };
  }
}
