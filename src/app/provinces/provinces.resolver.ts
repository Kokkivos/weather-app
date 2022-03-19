import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProvincesResponse } from '../shared/models/Response';
import { WeatherService } from '../shared/services/weather.service';

@Injectable({
  providedIn: 'root',
})
export class ProvincesResolver implements Resolve<any> {
  constructor(private _weatherService: WeatherService) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<ProvincesResponse | boolean> {
    const provinces: ProvincesResponse | boolean =
      await this._weatherService.getAllProvinces();
    debugger;
    return provinces;
  }
}
