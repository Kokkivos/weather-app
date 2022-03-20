import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss'],
})
export class ProvinceComponent implements OnInit {
  baseClass: string = 'province';

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _weatherService: WeatherService
  ) {}

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    const provinceCode = String(routeParams.get('code'));

    // await this._weatherService.getProvinceInfo(provinceCode).subscribe(
    //   (res: ProvinceResponseModel) => {
    //     const { provincia, ciudades, today, tomorrow } = res;
    //     this.WeatherDescriptionModel = {
    //       today: today.p,
    //       tomorrow: tomorrow.p,
    //     };
    //     this.province = provincia;
    //     this.cities = ciudades;

    //     this.dataList =
    //       this.cities &&
    //       this.cities.map((o) => {
    //         const res: ItemModel = {
    //           name: o.name,
    //           stateSky: o.stateSky,
    //           temperatures: o.temperatures,
    //         };
    //         return res || undefined;
    //       });

    //     this.handleLoading();
    //   },
    //   (err: any) => {
    //     console.log('HTTP Error', err);
    //     this._router.navigate(['error']);
    //     this.handleLoading();
    //   },
    //   () => console.log('HTTP request completed.')
    // );
  }
}
