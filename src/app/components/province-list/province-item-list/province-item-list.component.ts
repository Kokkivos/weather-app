import { Component, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-province-item-list',
  templateUrl: './province-item-list.component.html',
  styleUrls: ['./province-item-list.component.scss'],
})
export class ProvinceItemListComponent {
  @Input() name: string = '';
  @Input() code: string = '';
}
