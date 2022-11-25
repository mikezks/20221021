import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { DefaultService } from './default.service';

const isProd = false;
@Injectable({
  providedIn: 'root',
  useClass: DefaultService,
 /* useFactory: (http: HttpClient) => {
    if(isProd) {
      return new DefaultService(http);
    }else {
      return new DummyFlightService();
    }
  },
  deps: [HttpClient]*/
})
export abstract class FlightService {

 abstract find(from: string, to: string): Observable<Flight[]>;
}
