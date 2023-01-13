import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../app.module';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DefaultService implements FlightService {

  constructor(private http: HttpClient, @Inject(BASE_URL) private url: string) { }

  find(from: string, to: string): Observable<Flight[]> {

    const params = new HttpParams().set('from', from).set('to', to);

    return this.http.get<Flight[]>(this.url, { params })

  }

  save(flight: Flight): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.post<Flight>(url, flight, { headers });
  }
}
