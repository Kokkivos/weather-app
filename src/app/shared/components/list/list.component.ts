import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProvincesModel, ProvinceModel } from '../../models/Response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  baseClass: string = 'list';
  itemBaseClass: string = 'list__item';
  itemLinkBaseClass: string = 'list__item--with-link';

  @Input() data: ProvincesModel | undefined;
  @Input() simpleHeader: boolean = true;
  @Input() linkable: boolean = false;

  @Output() handleClick = new EventEmitter<ProvinceModel>();

  getStatus(item: ProvinceModel) {
    debugger;
    // if (item.temperatures?.min) {
    //   const temp = parseInt(item.temperatures.min);
    //   return temp < 0 ? 'ice.png' : temp > 10 ? 'sun.png' : 'cloud.png';
    // }
    return '';
  }
}
