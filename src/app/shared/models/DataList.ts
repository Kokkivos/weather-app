import { StateSkyModel, TemperaturesModel } from './Response';

export interface ItemModel {
  name: string;
  code?: string;
  stateSky?: StateSkyModel;
  temperatures?: TemperaturesModel;
}
export interface DataListModel extends Array<ItemModel> {}
