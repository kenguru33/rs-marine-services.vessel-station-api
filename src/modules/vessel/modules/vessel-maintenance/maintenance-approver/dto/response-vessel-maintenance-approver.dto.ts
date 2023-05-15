import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../../../dto/response-vessel.dto';

export class ResponseVesselMaintenanceApproverDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  title: string;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessel: ResponseVesselDto;
}
