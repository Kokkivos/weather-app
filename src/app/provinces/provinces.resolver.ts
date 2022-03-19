import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { AppState } from '../reduxe/state.redux';
import { ProvincesResponse } from '../shared/models/Response';
import { WeatherService } from '../shared/services/weather.service';
import { Store } from '@ngrx/store';
import { SpinnerActions } from '../reduxe/spinner.actions';

@Injectable({
  providedIn: 'root',
})
export class ProvincesResolver implements Resolve<any> {
  constructor(
    private _weatherService: WeatherService,
    private _store: Store<AppState>
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<ProvincesResponse | boolean> {
    this._store.dispatch(SpinnerActions.updateSpinner({ show: true }));

    const provinces: ProvincesResponse | boolean =
      await this._weatherService.getAllProvinces();

    this._store.dispatch(SpinnerActions.updateSpinner({ show: false }));
    return provinces;
  }
}
