import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
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
  ): Promise<Observable<boolean>> {
    console.log(1);
    const provinces: ProvincesResponse | string =
      await this._weatherService.getAllProvinces();

    console.log(2);
    console.log(provinces);
    debugger;

    return of(true);
  }
}
