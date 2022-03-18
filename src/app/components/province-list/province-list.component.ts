import { Component, OnInit } from '@angular/core';
import { DataList, Item } from 'src/app/models/DataList';
import { Provinces } from 'src/app/models/Provinces';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.scss'],
})
export class ProvinceListComponent implements OnInit {
  baseClass: string = 'provinces';
  provinces: Provinces | undefined;
  dataList: DataList | undefined;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getProvinces().subscribe((data: any) => {
      if (data) {
        const { provincias } = data;
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
      }
    });
  }
}
