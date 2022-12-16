import { APP_ROUTES } from './app.routes';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { RouterModule } from '@angular/router';

export const BASE_URL = new InjectionToken('BASE_URL', {
  providedIn: 'root',
  factory: () => 'https://demo.angulararchitects.io/api/flight'
})

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),

    FlightBookingModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent
  ],
  providers: [
   // DummyFlightService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
