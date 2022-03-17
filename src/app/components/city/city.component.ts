import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/Cities';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  @Input() info: City | undefined;
  statusIcon: string = '';
  baseClass: string = 'info-city';

  constructor() {}

  getStatus(temp: number) {
    return temp < 0 ? 'ice.png' : temp > 10 ? 'sun.png' : 'cloud.png';
  }

  ngOnInit(): void {
    const tempNum: number = parseInt(this.info?.temperatures?.min || '');
    this.statusIcon = this.getStatus(tempNum);
  }
}
