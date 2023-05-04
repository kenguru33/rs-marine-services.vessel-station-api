import { Expose } from 'class-transformer';

export class ResponseAccommodationDto {
  @Expose()
  id: number;

  @Expose()
  typeId: number;

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

  @Expose()
  stationId: number;
}
