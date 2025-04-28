import { IMyPageResponse } from '@/api/scheme';

export interface IFavoriteItem {
  id: number;
  name: string;
  streetAddress: string;
  lotAddress: string;
  latitude: number;
  longitude: number;
  avgCleanliness: number;
  avgAmenities: number;
  avgAccessibility: number;
}

export interface IReviewItem {
  id: number;
  toilet: {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
  };
  comment: string;
  avgCleanliness: number;
  avgAmenities: number;
  avgAccessibility: number;
  createdAt: string;
  updatedAt: string;
}

class MyPageModel {
  #favorites: IFavoriteItem[];
  #reviews: IReviewItem[];

  constructor(myPageResponse: IMyPageResponse) {
    this.#favorites = myPageResponse.favorites.map((item) => ({
      id: item.id,
      name: item.name,
      streetAddress: item.street_address,
      lotAddress: item.lot_address,
      latitude: item.latitude,
      longitude: item.longitude,
      avgCleanliness: item.avg_cleanliness,
      avgAmenities: item.avg_amenities,
      avgAccessibility: item.avg_accessibility,
    }));

    this.#reviews = myPageResponse.reviews.map((item) => ({
      id: item.id,
      toilet: {
        id: item.toilet.id,
        name: item.toilet.name,
        latitude: item.toilet.latitude,
        longitude: item.toilet.longitude,
      },
      comment: item.comment,
      avgCleanliness: item.avg_cleanliness,
      avgAmenities: item.avg_amenities,
      avgAccessibility: item.avg_accessibility,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
    }));
  }

  get favorites() {
    return this.#favorites;
  }

  get reviews() {
    return this.#reviews;
  }
}

export default MyPageModel;
