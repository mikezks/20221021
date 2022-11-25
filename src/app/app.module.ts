import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { DummyFlightService } from './services/dummy-flight.service';

export const BASE_URL = new InjectionToken('BASE_URL', {
  providedIn: 'root',
  factory: () => 'https://demo.angulararchitects.io/api/flight'
})

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent
  ],
  providers: [
    DummyFlightService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
