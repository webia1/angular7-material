import { AddressService } from '../services/address.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
export class AddressValidators {
  static plzExists(as: AddressService) {
    // tslint:disable-next-line:only-arrow-functions
    return function(
      control: FormControl,
    ): Observable<{ [error: string]: any }> {
      return as.checkPlzExists(control.value).pipe(
        map((data: any) =>
          data
            ? null
            : {
                plzExists: { valid: false },
              },
        ),
      );
    };
  }
}
