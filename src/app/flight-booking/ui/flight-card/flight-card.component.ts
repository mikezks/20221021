import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Flight } from 'src/app/entities/flight';

@Component({
  standalone: true,
  selector: 'app-flight-card',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent   {


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Card');
    console.log('changes Card:',changes)
  }

  @Input() item: Flight | undefined;
  @Input() selected: boolean=false;
  @Input() change: number =1;
  @Output() selectedChange = new EventEmitter();



  select():void {
    this.selected = true;
    this.selectedChange.emit(true);
  }

  deSelect():void {
    this.selected = false;
    this.selectedChange.emit(false);
  }

}
