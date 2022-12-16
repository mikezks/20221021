import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityPipe } from './pipes/city.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { StatusFilterPipe } from './pipes/status-filter.pipe';



@NgModule({
  declarations: [
    CityPipe,
    ColorPipe,
    StatusFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CityPipe,
    ColorPipe,
    StatusFilterPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
