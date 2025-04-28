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
  toiletId: number;
  name: string;
  latitude: number;
  longitude: number;
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
      toiletId: item.toilet_id,
      name: item.toilet_name,
      latitude: item.latitude,
      longitude: item.longitude,
      comment: item.comment,
      avgCleanliness: item.avg_cleanliness,
      avgAmenities: item.avg_amenities,
      avgAccessibility: item.avg_accessibility,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
    }));
  }

  toResponse(): IMyPageResponse {
    return {
      favorites: this.#favorites.map((fav) => ({
        id: fav.id,
        name: fav.name,
        street_address: fav.streetAddress,
        lot_address: fav.lotAddress,
        latitude: fav.latitude,
        longitude: fav.longitude,
        avg_cleanliness: fav.avgCleanliness,
        avg_amenities: fav.avgAmenities,
        avg_accessibility: fav.avgAccessibility,
      })),
      reviews: this.#reviews.map((rev) => ({
        id: rev.id,
        toilet_id: rev.toiletId,
        toilet_name: rev.name,
        latitude: rev.latitude,
        longitude: rev.longitude,
        comment: rev.comment,
        avg_cleanliness: rev.avgCleanliness,
        avg_amenities: rev.avgAmenities,
        avg_accessibility: rev.avgAccessibility,
        created_at: rev.createdAt,
        updated_at: rev.updatedAt,
      })),
    };
  }

  get favorites() {
    return this.#favorites;
  }

  get reviews() {
    return this.#reviews;
  }
}

export default MyPageModel;
