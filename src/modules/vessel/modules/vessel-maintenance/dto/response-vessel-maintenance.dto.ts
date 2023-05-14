import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../../dto/response-vessel.dto';
import { ResponseVesselInspectorDto } from '../../vessel-inspector/dto/response-vessel-inspector.dto';

export class ResponseVesselMaintenanceDto {
  @Expose()
  description: string;

  @Expose()
  progress: number; // in percent

  @Expose()
  responsible: string; // verksted, verft, etc

  @Type(() => ResponseVesselInspectorDto)
  @Expose()
  approvedBy: ResponseVesselInspectorDto;

  @Expose()
  fromDate: Date;

  @Expose()
  toDate: Date;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessel: ResponseVesselDto;
}
