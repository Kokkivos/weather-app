import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceListComponent } from '../components/DELETE/province-list/province-list.component';

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
        path: ':CODPROV',
        component: ProvinceListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvincesRoutingModule {}
