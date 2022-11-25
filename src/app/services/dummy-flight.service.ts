import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../entities/flight';

@Injectable({
  providedIn: 'root',
})
export class DummyFlightService {
  constructor() {}

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      {
        id: 1,
        from: 'Graz',
        to: 'Hamburg',
        date: '2023-3-1 22:22:22.222',
        delayed: false,
      },
      {
        id: 2,
        from: 'Graz',
        to: 'Hamburg',
        date: '2023-4-1 22:22:22.222',
        delayed: false,
      },
    ]);
  }
}
