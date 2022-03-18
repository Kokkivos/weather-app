import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { SpinnerActions } from '../components/spinner/redux/spinner.actions';
import { Provinces } from '../models/Provinces';
import { AppState } from '../state.redux';
import { ProvincesService } from './provinces.service';
import { ProvincesActions } from './redux/provinces.actions';

@Injectable({
  providedIn: 'root',
})
export class ProvincesResolver implements Resolve<Provinces | undefined> {
  constructor(
    private _provincesService: ProvincesService,
    private _store: Store<AppState>
  ) {}
  async resolve(): Promise<Provinces | undefined> {
    this._store.dispatch(SpinnerActions.updateSpinner({ show: true }));
    const provinces: Provinces | undefined =
      await this._provincesService.getAllProvinces();
    this._store.dispatch(ProvincesActions.setProvinces(provinces));
    this._store.dispatch(SpinnerActions.updateSpinner({ show: false }));
    return provinces;
  }
}
