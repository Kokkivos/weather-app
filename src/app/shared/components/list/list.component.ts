import { Component, Input } from '@angular/core';
import { DataListModel, ItemModel } from 'src/app/shared/models/DataList';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  baseClass: string = 'list';
  itemBaseClass: string = 'list__item';
  itemLinkBaseClass: string = 'list__item--with-link';

  @Input() data: DataListModel | undefined;
  @Input() simpleHeader: boolean = true;
  @Input() withDelete: boolean = false;

  getStatus(item: ItemModel) {
    if (item.temperatures?.min) {
      const temp = parseInt(item.temperatures.min);
      return temp < 0 ? 'ice.png' : temp > 10 ? 'sun.png' : 'cloud.png';
    }
    return '';
  }

  delete(index: number) {
    this.data && this.data.splice(index, 1);
  }
}
