import { Expose } from 'class-transformer';

export class ResponseVesselCommEquipTypeDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description?: string;
}
