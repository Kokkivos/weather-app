import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataList, Item } from 'src/app/shared/models/DataList';
import { Provinces } from 'src/app/shared/models/Provinces';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.scss'],
})
export class ProvincesComponent implements OnInit {
  baseClass: string = 'provinces';
  provinces: Provinces | undefined;
  dataList: DataList | undefined;
  loadingVisible: boolean = true;
  hideLoading: boolean = false;

  constructor(
    private _weatherService: WeatherService,
    private _router: Router
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
    await this._weatherService.getProvinces().subscribe(
      (res: any) => {
        this.handleLoading();

        const { provincias } = res;
        this.provinces = provincias;

        this.dataList =
          this.provinces &&
          this.provinces.map((o) => {
            const res: Item = {
              name: o.NOMBRE_PROVINCIA,
              code: o.CODPROV,
            };
            return res || undefined;
          });
      },
      (err: any) => {
        this.handleLoading();
        console.log('HTTP Error', err);
        this._router.navigate(['error']);
      },
      () => console.log('HTTP request completed.')
    );
  }
}
