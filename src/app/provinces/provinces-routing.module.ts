import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvincesComponent } from './provinces.component';
import { ProvincesResolver } from './provinces.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProvincesComponent,
        resolve: { provinces: ProvincesResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvincesRoutingModule {}
