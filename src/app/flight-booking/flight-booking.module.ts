import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';



@NgModule({
  declarations: [FlightSearchComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FlightSearchComponent]
})
export class FlightBookingModule { }
