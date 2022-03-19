import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { ProvinceResponse, ProvincesResponse } from '../models/Response';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherUrl = 'https://www.el-tiempo.net/api/json/v2/provincias';

  constructor(private http: HttpClient) {}

  public getProvinces(): ProvincesResponse | any {
    return this.http.get(this.weatherUrl).pipe(
      map((result) => {
        return result;
      }),
      catchError((err) => {
        return err;
      })
    );
  }

  public getProvinceInfo(code: string): ProvinceResponse | any {
    return this.http.get(`${this.weatherUrl}/${code}`).pipe(
      map((result) => {
        return result;
      }),
      catchError((err) => {
        return err;
      })
    );
  }
}
