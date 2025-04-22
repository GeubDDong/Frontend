import { ComponentProps } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import locationPin_selected from '@/assets/locationPin_selected.svg';
import locationPin_liked from '@/assets/locationPin_liked.svg';
import locationPin_normal from '@/assets/locationPin_normal.svg';

export type MarkerType = 'selected' | 'liked' | 'default';

const markerImageMap: Record<
  MarkerType,
  ComponentProps<typeof MapMarker>['image']
> = {
  selected: {
    src: locationPin_selected,
    size: { width: 40, height: 40 },
  },
  liked: {
    src: locationPin_liked,
    size: { width: 25, height: 25 },
  },
  default: {
    src: locationPin_normal,
    size: { width: 25, height: 25 },
  },
};

interface CustomMapMarkerProps
  extends Omit<ComponentProps<typeof MapMarker>, 'image'> {
  type: MarkerType;
}

export function CustomMapMarker({ type, ...props }: CustomMapMarkerProps) {
  return <MapMarker image={markerImageMap[type]} {...props} />;
}
