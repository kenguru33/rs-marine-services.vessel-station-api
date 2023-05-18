import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../dto/response-vessel.dto';

export class ResponseVesselClassDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description?: string;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessels: ResponseVesselDto[];
}
