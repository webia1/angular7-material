import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddressService } from '../shared/services/address.service';
import { AddressValidators } from '../shared/validators/address-validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private as: AddressService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      plz: [null, Validators.required, AddressValidators.plzExists(this.as)],
    });
  }
}
