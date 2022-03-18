import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createFeatureSelector, Store } from '@ngrx/store';

import { catchError, firstValueFrom, Observable, of } from 'rxjs';
import { Province, Provinces } from '../models/Provinces';
import { AppState } from '../state.redux';
import { WEATHER_LIST_API } from './conf/conf';
import { ProvincesActions } from './redux/provinces.actions';
import { initialState } from './redux/provinces.reducers';

@Injectable({
  providedIn: 'root',
})
export class ProvincesService {
  provinces$: Observable<Provinces> = this._store.select(
    createFeatureSelector<Provinces>('provincesList')
  );

  constructor(private _http: HttpClient, private _store: Store<AppState>) {}

  async getAllProvinces(): Promise<Provinces | undefined> {
    return firstValueFrom(
      this._http
        .get<Provinces>(WEATHER_LIST_API)
        .pipe(catchError((err) => of(initialState)))
    );
  }
  deleteProvince(province: Province) {
    this._store.dispatch(ProvincesActions.deleteProvinces(province));
  }
}
