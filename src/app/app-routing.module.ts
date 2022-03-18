import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ProvinceListComponent } from './components/province-list/province-list.component';
import { ProvinceComponent } from './components/province/province.component';

const routes: Routes = [
  {
    path: '',
    component: ProvinceListComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'province/:code',
    component: ProvinceComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
