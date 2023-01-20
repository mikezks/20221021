import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { BookingService, BookingViewModel } from './../../data-access/booking.service';

@Component({
  standalone: true,
  imports: [
    NgIf, NgFor, DatePipe,
    RouterLinkWithHref
  ],
  selector: 'app-booking-overview',
  template: `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Bookings</h2>
      </div>
      <div class="card-body"></div>
    </div>

    <div class="card" *ngIf="bookings.length">

      <table class="table table-condensed">
        <thead>
            <tr>
                <th>Passenger</th>
                <th>Flight</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <tr
              *ngFor="let booking of bookings">
                <td>{{ booking.passengerName }}</td>
                <td>
                  <a [routerLink]="['../flight-edit', booking?.flightId]">
                    #{{ booking.flightId }}: {{ booking.flightTitle }}
                  </a>
                </td>
                <td>{{ booking.date | date:'dd.MM.yyyy HH:mm' }}</td>
            </tr>
        </tbody>
      </table>

    </div>
  `
})
export class BookingOverviewComponent {
  bookings: BookingViewModel[] = [];

  constructor(private bookingService: BookingService) {
    this.bookingService.updateViewModel().subscribe(
      bookingVm => this.bookings = bookingVm
    );
  }
}
