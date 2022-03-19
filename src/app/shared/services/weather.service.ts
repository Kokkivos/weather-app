import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, map, of } from 'rxjs';
import { ProvinceResponse, ProvincesResponse } from '../models/Response';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherUrl = 'https://www.el-tiempo.net/api/json/v2/provincias';

  constructor(private _http: HttpClient) {}

  getAllProvinces(): Promise<ProvincesResponse | string> {
    return firstValueFrom(
      this._http.get<ProvincesResponse>(this.weatherUrl).pipe(
        map((result) => {
          return result;
        }),
        catchError((err) => of(`Bad Promise`))
      )
    );
  }

  public getProvinceInfo(code: string): ProvinceResponse | any {
    return this._http.get(`${this.weatherUrl}/${code}`).pipe(
      map((result) => {
        return result;
      }),
      catchError((err) => {
        return err;
      })
    );
  }
}
