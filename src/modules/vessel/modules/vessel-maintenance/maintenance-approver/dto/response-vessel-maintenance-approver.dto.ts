import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../../../dto/response-vessel.dto';
import { ResponseVesselMaintenanceDto } from '../../dto/response-vessel-maintenance.dto';

export class ResponseVesselMaintenanceApproverDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  title: string;

  @Type(() => ResponseVesselMaintenanceDto)
  @Expose()
  maintenances: ResponseVesselMaintenanceDto[];
}
