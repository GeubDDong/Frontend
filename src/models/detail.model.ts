import { IToiletDetailResponse } from '@/api/scheme';
import { IRatingItem } from '@/types';
import { formatDateToString } from '@/utils/dateUtil';

export interface IToiletDetailModel {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  openHour: string;
  ratingItems: IRatingItem;
  rating: number;
  management: IToiletManagementModel;
  facility: IToiletFacilityModel;
}

export interface IToiletManagementModel {
  name: string;
  phone: string;
}

export interface IToiletFacilityModel {
  hasMale: boolean;
  hasFemale: boolean;
  hasDisabledMale: boolean;
  hasDisabledFemale: boolean;
  hasKids: boolean;
  hasBell: boolean;
  hasCCTV: boolean;
  hasDiaperChangingStation: boolean;
  referenceDate: string;
}

class DetailModel {
  #info: IToiletDetailModel;

  parseFacility = (
    info: IToiletDetailResponse['facility'],
  ): IToiletFacilityModel => {
    return {
      hasMale: info.male_toilet > 0 || info.male_urinal > 0,
      hasFemale: info.female_toilet > 0,
      hasDisabledMale:
        info.disabled_male_toilet > 0 || info.disabled_male_urinal > 0,
      hasDisabledFemale: info.disabled_female_toilet > 0,
      hasKids: info.kids_toilet_male > 0 || info.kids_toilet_female > 0,
      hasBell: info.emergency_bell === 'Y',
      hasCCTV: info.cctv === 'Y',
      hasDiaperChangingStation: info.diaper_changing_station === 'Y',
      referenceDate: formatDateToString(info.reference_date),
    };
  };

  constructor(info: IToiletDetailResponse) {
    this.#info = {
      name: info.name,
      address: info.street_address || info.lot_address,
      latitude: info.latitude,
      longitude: info.longitude,
      openHour: info.open_hour,
      ratingItems: {
        cleanliness: info.avg_cleanliness,
        amenities: info.avg_amenities,
        accessibility: info.avg_accessibility,
      },
      rating: info.avg_rating,
      management: {
        name: info.management.name,
        phone: info.management.phone_number,
      },
      facility: this.parseFacility(info.facility),
    };
  }

  get detailInfo() {
    return this.#info;
  }
}

export default DetailModel;
