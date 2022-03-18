import { Component } from '@angular/core';
import { createFeatureSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state.redux';
import { SpinnerState } from './redux/spinner.reducers';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  spinner$: Observable<SpinnerState> = this._store.select(
    createFeatureSelector<SpinnerState>('spinner')
  );
  constructor(private _store: Store<AppState>) {}
}
