import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: 'input[city]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityValidatorDirective,
    multi: true
  }]
})
export class CityValidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const validCities = [
      'Graz', 'Hamburg', 'Berlin'
    ];

    if (control.value && !validCities.includes(control.value)) {
      return {
        city: {
          actualCity: control.value,
          validCities
        }
      };
    }

    return null;
  }
}
