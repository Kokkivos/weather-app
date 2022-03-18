import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ProvinceListComponent } from './components/province-list/province-list.component';
import { ProvinceComponent } from './components/province/province.component';

const routes: Routes = [
  { path: 'error', component: ErrorComponent },
  {
    path: '',
    loadChildren: () =>
      import('./provinces/provinces.module').then((m) => m.ProvincesModule),
  },
  // {
  //   path: 'province/:code',
  //   component: ProvinceComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
