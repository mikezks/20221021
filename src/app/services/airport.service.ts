import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }

  short(name: string): Observable<string>  {
    const url = 'http://www.angular.at/api/airport/code';
    const params = new HttpParams().set('name', name);

    return this.http.get<string>(url, { params })
  }

  long(name: string) : Observable<string> {
    const url = 'http://www.angular.at/api/airport/fullName';
    const params = new HttpParams().set('name', name);

    return this.http.get<string>(url, { params })
  }

  transform(value: string, fmt: string): Observable<string> {
    if (fmt == 'short') return this.short(value);
    return this.long(value);
  }
}
