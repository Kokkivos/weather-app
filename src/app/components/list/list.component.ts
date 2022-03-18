import { Component, Input, OnInit } from '@angular/core';
import { DataList, Item } from 'src/app/models/DataList';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  baseClass: string = 'list';
  itemBaseClass: string = 'list__item';
  itemLinkBaseClass: string = 'list__item--with-link';

  @Input() data: DataList | undefined;

  getStatus(item: Item) {
    if (item.temperatures?.min) {
      const temp = parseInt(item.temperatures.min);
      return temp < 0 ? 'ice.png' : temp > 10 ? 'sun.png' : 'cloud.png';
    }
    return '';
  }

  ngOnInit(): void {}
}
