import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cities } from 'src/app/shared/models/Cities';
import { DataList, Item } from 'src/app/shared/models/DataList';
import { Province, WeatherDescription } from 'src/app/shared/models/Provinces';
import { ProvinceResponse } from 'src/app/shared/models/Response';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss'],
})
export class ProvinceComponent implements OnInit {
  baseClass: string = 'province';

  province: Province | undefined;
  cities: Cities | undefined;
  weatherDescription: WeatherDescription | undefined;
  dataList: DataList | undefined;
  loadingVisible: boolean = true;
  hideLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _weatherService: WeatherService
  ) {}

  handleLoading() {
    const timer = () => {
      this.hideLoading = true;
      clearInterval(myInterval);
    };
    this.loadingVisible = false;
    const myInterval = setInterval(timer, 300);
  }

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    const provinceCode = String(routeParams.get('code'));

    await this._weatherService.getProvinceInfo(provinceCode).subscribe(
      (res: ProvinceResponse) => {
        const { provincia, ciudades, today, tomorrow } = res;
        this.weatherDescription = {
          today: today.p,
          tomorrow: tomorrow.p,
        };
        this.province = provincia;
        this.cities = ciudades;

        this.dataList =
          this.cities &&
          this.cities.map((o) => {
            const res: Item = {
              name: o.name,
              stateSky: o.stateSky,
              temperatures: o.temperatures,
            };
            return res || undefined;
          });

        this.handleLoading();
      },
      (err: any) => {
        console.log('HTTP Error', err);
        this._router.navigate(['error']);
        this.handleLoading();
      },
      () => console.log('HTTP request completed.')
    );
  }
}
