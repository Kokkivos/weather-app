import { Cities } from './Cities';
import { Province } from './Provinces';

export interface ComautonomaResponse {
  ID: string;
  CODAUTON: string;
  CODCOMUN: string;
  NOMBRE: string;
}

export interface BreadcrumResponse {
  name: string;
  url: string | null;
  title: string;
}
export interface BreadcrumsResponse extends Array<BreadcrumResponse> {}

export interface ProvinceResponse {
  title: string;
  today: { p: string };
  tomorrow: { p: string };
  ciudades: Cities;
  provincia: Province;
  comautonoma: ComautonomaResponse;
  breadcrumb: BreadcrumsResponse;
  metadescripcion: string;
  keywords: string;
}

export interface ProvincesResponse {
  breadcrumb: BreadcrumsResponse;
  keywords: string;
  metadescripcion: string;
  provincias: Province;
  title: string;
}
