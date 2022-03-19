export interface StateSky {
  description: string;
  id: string;
}
export interface Temperatures {
  max: string;
  min: string;
}
export interface City {
  id: string;
  idProvince: string;
  name: string;
  nameProvince: string;
  stateSky: StateSky;
  temperatures: Temperatures;
}
export interface Cities extends Array<City> {}
