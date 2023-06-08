import { Exclude, Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../../dto/response-vessel.dto';
import { ResponseVesselInspectorDto } from '../../vessel-inspector/dto/response-vessel-inspector.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselMaintenanceDto {
  @ApiProperty({ example: 'Rutinemessig maskin vedlikehold' })
  @Expose()
  description: string;

  @ApiProperty({ example: 0 })
  @Expose()
  progress: number; // in percent

  @ApiProperty({ example: 'Aker Mekaniske' })
  @Expose()
  responsible: string; // verksted, verft, etc

  @Type(() => ResponseVesselInspectorDto)
  @Expose()
  approvedBy: ResponseVesselInspectorDto;

  @ApiProperty({ example: '2023-10-05T14:00:00.000Z' })
  @Expose()
  fromDate: Date;

  @ApiProperty({ example: '2023-10-12T14:00:00.000Z' })
  @Expose()
  toDate: Date;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessel: ResponseVesselDto;
}
