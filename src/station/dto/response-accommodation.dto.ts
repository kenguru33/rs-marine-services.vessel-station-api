import { Expose } from 'class-transformer';

export class ResponseAccommodationDto {
  @Expose()
  id: number;

  @Expose()
  typeId: number;

  @Expose()
  type: {
    id: number;
    name: string;
  };

  @Expose()
  description?: string;

  @Expose()
  address: string;

  @Expose()
  postalCode: string;

  @Expose()
  postalLocation: string;

  @Expose()
  postalBox?: number;

  @Expose()
  latitude: number;

  @Expose()
  longitude: number;

  stationId: number;
}
