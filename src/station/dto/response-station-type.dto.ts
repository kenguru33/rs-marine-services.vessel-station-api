import { Expose } from 'class-transformer';

export class ResponseStationTypeDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description: string;
}
