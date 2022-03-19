import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { SpinnerReducer } from '../reduxe/spinner.reducers';

@NgModule({
  declarations: [ListComponent, SpinnerComponent, ReplacePipe],
  imports: [
    RouterModule,
    CommonModule,
    StoreModule.forFeature('spinner', SpinnerReducer),
  ],
  exports: [ListComponent, SpinnerComponent, ReplacePipe],
})
export class SharedModule {}
