import { Component, OnInit } from '@angular/core';
import { Provinces } from 'src/app/models/Provinces';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.scss'],
})
export class ProvinceListComponent implements OnInit {
  provinces: Provinces | undefined;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getProvinces().subscribe((data: any) => {
      if (data) {
        const { provincias } = data;
        this.provinces = provincias;
      }
    });
  }
}
