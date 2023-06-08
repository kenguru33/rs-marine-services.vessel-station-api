import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../../../dto/response-vessel.dto';
import { ResponseVesselMaintenanceDto } from '../../dto/response-vessel-maintenance.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselMaintenanceApproverDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'Tony Johansen' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'tony.johansen@rs.no' })
  @Expose()
  email: string;

  @ApiProperty({ example: '91679595' })
  @Expose()
  phone: string;

  @Type(() => ResponseVesselMaintenanceDto)
  @Expose()
  maintenances: ResponseVesselMaintenanceDto[];
}
