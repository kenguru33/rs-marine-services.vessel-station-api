import { Expose, Type } from 'class-transformer';

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
}
