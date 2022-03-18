import { createReducer, on } from '@ngrx/store';
import { Province, Provinces } from 'src/app/models/Provinces';
import { ProvincesActions } from './provinces.actions';

export const initialState: Provinces | undefined = undefined;

export const ProvincesReducer = createReducer<any>(
  initialState,
  on(
    ProvincesActions.setProvinces,
    (state: Provinces, payload: Provinces) => payload
  ),
  on(ProvincesActions.deleteProvinces, (state: Provinces, payload: Province) =>
    Object.assign({}, state, {
      provincias: state.filter(
        (province: Province) => province.CODPROV !== payload.CODPROV
      ),
    })
  )
);
