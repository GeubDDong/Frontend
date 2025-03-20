export interface IToiletBasicInfo {
  id: number;
  latitude: number;
  longitude: number;
  liked: {
    like: boolean;
    count: number;
  };
  lot_address: string;
  name: string;
  nearest: boolean;
  open_hours: string;
  street_address: string;
}
