import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../../dto/response-vessel.dto';
import { ResponseVesselCommunicationEquipmentTypeDto } from '../vessel-communication-equipment-type/dto/response-vessel-communication-equipment-type';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselCommunicationEquipmentDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @Type(() => ResponseVesselCommunicationEquipmentTypeDto)
  @Expose()
  type: ResponseVesselCommunicationEquipmentTypeDto;

  @ApiProperty({ example: 2 })
  @Expose()
  numberOfUnits: number;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessel: ResponseVesselDto;

  vesselId: number;
}
