export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface IToiletInfo {
  id: number;
  name: string;
  location: ILocation;
  street_address: string;
  lot_address: string;
  open_hours: string;
}
