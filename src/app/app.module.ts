import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTES } from './app.routes';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';

export const BASE_URL = new InjectionToken('BASE_URL', {
  providedIn: 'root',
  factory: () => 'https://demo.angulararchitects.io/api/flight'
})

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),

    CoreModule,
    FlightBookingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
   // DummyFlightService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
