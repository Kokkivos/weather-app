import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceListComponent } from './components/province-list/province-list.component';
import { ProvinceComponent } from './components/province/province.component';

const routes: Routes = [
  {
    path: '',
    component: ProvinceListComponent,
  },
  {
    path: 'province/:code',
    component: ProvinceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
