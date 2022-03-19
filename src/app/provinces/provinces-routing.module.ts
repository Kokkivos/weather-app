import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceComponent } from '../components/province/province.component';

import { ProvincesComponent } from './provinces.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProvincesComponent,
      },
      {
        path: 'province/:code',
        component: ProvinceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvincesRoutingModule {}
