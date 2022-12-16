import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      Validators.minLength(3)
    ]],
    to: ['Hamburg', [
      Validators.required,
      Validators.minLength(3)
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
