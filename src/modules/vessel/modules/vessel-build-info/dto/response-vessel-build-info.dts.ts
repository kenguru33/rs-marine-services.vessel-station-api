import { Vessel } from '@prisma/client';
import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../../dto/response-vessel.dto';

export class ResponseVesselBuildInfoDto {
  @Expose()
  buildYear: number;

  @Expose()
  inServiceFrom: string;

  @Expose()
  inServiceTo: string;

  @Expose()
  builder: string;

  @Expose()
  salesOrganization: string;

  @Expose()
  buildMaterial: string;

  @Expose()
  financedBy: string;

  @Expose()
  dnvClass: string;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessel: ResponseVesselDto
  
  vesselId: number;


}
