import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListComponent, LoadingComponent, ReplacePipe],
  imports: [RouterModule, CommonModule],
  exports: [ListComponent, LoadingComponent, ReplacePipe],
})
export class SharedModule {}
