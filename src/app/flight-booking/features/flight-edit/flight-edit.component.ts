import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateCity, validateCityWithParams } from 'src/app/shared/validation/city.validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm = this.fb.nonNullable.group({
    id: [0],
    from: ['Graz', [
      Validators.required,
      Validators.minLength(3),
      validateCity
    ]],
    to: ['Hamburg', [
      Validators.required,
      Validators.minLength(3),
      validateCityWithParams([
        'Hamburg', 'Wien', 'Frankfurt'
      ])
    ]],
    date: [new Date().toISOString()]
  }, {
    updateOn: 'change'
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editForm.valueChanges.subscribe(console.log);
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
