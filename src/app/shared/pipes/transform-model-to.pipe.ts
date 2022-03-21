import { Pipe, PipeTransform } from '@angular/core';
import { DataListModel, ItemModel } from '../models/DataList';
import { AllProvincesModel, ProvinceModel } from '../models/Response';

import { from, map, pipe } from 'rxjs';
import { AllModelsType } from '../models/allModelsType';
@Pipe({
  name: 'transformModelTo',
})
export class TransformModelToPipe implements PipeTransform {
  transform(
    value: AllProvincesModel | null | any,
    args: { modelFrom: string; modelTo: string }
  ): DataListModel | undefined {
    const { modelFrom, modelTo } = args;

    switch (modelTo) {
      case AllModelsType.DATA_LIST_MODEL:
        const result: DataListModel = value.map((val: ProvinceModel) => {
          let item: ItemModel = {
            name: val.NOMBRE_PROVINCIA,
            code: val.CODPROV,
          };

          return item;
        });

        return result;

      default:
        return undefined;
    }
  }
}
