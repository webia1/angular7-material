import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
  ],
})
export class MaterialModule {}
