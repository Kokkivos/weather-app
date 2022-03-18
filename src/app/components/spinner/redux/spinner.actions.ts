import { createAction, props } from '@ngrx/store';

const actionUpdateSpinner = createAction(
  '[Spiner] UPDATE SPINNER',
  props<any>()
);

export const SpinnerActions = {
  updateSpinner: actionUpdateSpinner,
};
