import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cities } from 'src/app/models/Cities';
import { Province, WeatherDescription } from 'src/app/models/Provinces';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss'],
})
export class ProvinceComponent implements OnInit {
  province: Province | undefined;
  cities: Cities | undefined;
  weatherDescription: WeatherDescription | undefined;
  baseClass: string = 'province';

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const provinceCode = String(routeParams.get('code'));

    this.weatherService.getProvinceInfo(provinceCode).subscribe((data: any) => {
      if (data) {
        const { provincia, ciudades, today, tomorrow } = data;
        this.weatherDescription = {
          today: today.p,
          tomorrow: tomorrow.p,
        };
        this.province = provincia;
        this.cities = ciudades;
      }
    });
  }
}
