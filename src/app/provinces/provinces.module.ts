import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvincesRoutingModule } from './provinces-routing.module';
import { ProvincesComponent } from './provinces.component';

@NgModule({
  declarations: [ProvincesComponent],
  imports: [CommonModule, ProvincesRoutingModule],
})
export class ProvincesModule {}
