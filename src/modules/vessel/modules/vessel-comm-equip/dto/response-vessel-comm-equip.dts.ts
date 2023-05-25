import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../../dto/response-vessel.dto';
import { ResponseVesselCommEquipTypeDto } from '../vessel-comm-equip-type/dto/response-vessel-comm-equip-type';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselCommEquipDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @Type(() => ResponseVesselCommEquipTypeDto)
  @Expose()
  type: ResponseVesselCommEquipTypeDto;

  @ApiProperty({ example: 2 })
  @Expose()
  numberOfUnits: number;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessel: ResponseVesselDto;

  vesselId: number;
}
