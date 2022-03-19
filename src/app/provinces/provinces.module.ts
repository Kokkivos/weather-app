import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvincesComponent } from './provinces.component';
import { ProvincesRoutingModule } from './provinces-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProvinceComponent } from '../components/province/province.component';

import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [ProvincesComponent, ProvinceComponent],
  imports: [CommonModule, ProvincesRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProvincesModule {}
