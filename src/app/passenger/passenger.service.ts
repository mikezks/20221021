import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';


export interface Passenger {
  id: number;
  firstname: string;
  lastname: string;
}


@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor() { }

  find(firstname: string, lastname: string): Observable<Passenger[]> {
    return of([
      {
        id: 1,
        firstname: 'Mary',
        lastname: 'Doe'
      },
      {
        id: 2,
        firstname: 'Peter',
        lastname: 'Power'
      }
    ]);
  }
}
