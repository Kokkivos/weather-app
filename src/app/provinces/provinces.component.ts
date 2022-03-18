import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Province, Provinces } from '../models/Provinces';
import { AppState } from '../state.redux';
import { ProvincesService } from './provinces.service';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.scss'],
})
export class ProvincesComponent {
  provinces$: Observable<Provinces> = this._provincesService.provinces$;
  constructor(
    private _store: Store<AppState>,
    private _provincesService: ProvincesService
  ) {
    debugger;
  }

  deleteProvince(province: Province) {
    this._provincesService.deleteProvince(province);
  }
}
