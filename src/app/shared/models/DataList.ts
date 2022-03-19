import { StateSky, Temperatures } from './Cities';

export interface Item {
  name: string;
  code?: string;
  stateSky?: StateSky;
  temperatures?: Temperatures;
}
export interface DataList extends Array<Item> {}
