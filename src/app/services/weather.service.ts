import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherUrl = 'https://www.el-tiempo.net/api/json/v2/provincias';

  constructor(private http: HttpClient) {}

  public getProvinces() {
    return this.http.get(this.weatherUrl);
  }

  public getProvinceInfo(code: string) {
    return this.http.get(`${this.weatherUrl}/${code}`);
  }
}
