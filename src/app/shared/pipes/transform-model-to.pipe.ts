import { Pipe, PipeTransform } from '@angular/core';
import { DataListModel } from '../models/DataList';
import { AllProvincesModel } from '../models/Response';

@Pipe({
  name: 'transformModelTo',
})
export class TransformModelToPipe implements PipeTransform {
  transform(
    value: AllProvincesModel | null,
    args: { modelFrom: string; modelTo: string }
  ): DataListModel {
    let result: DataListModel = [];

    debugger;
    return result;
  }
}
