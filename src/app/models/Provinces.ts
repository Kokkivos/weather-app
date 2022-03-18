import { Cities } from './Cities';

export interface WeatherDescription {
  today: string;
  tomorrow: string;
}

export interface Province {
  CAPITAL_PROVINCIA: string;
  CODAUTON: string;
  CODPROV: string;
  COMUNIDAD_CIUDAD_AUTONOMA: string;
  NOMBRE_PROVINCIA: string;
}
export interface Provinces extends Array<Province> {}
