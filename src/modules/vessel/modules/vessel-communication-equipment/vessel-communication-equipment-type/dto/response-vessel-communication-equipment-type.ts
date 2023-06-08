import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ResponseVesselCommunicationEquipmentDto } from '../../dto/response-vessel-communication-equipment.dts';

export class ResponseVesselCommunicationEquipmentTypeDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'VHF' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'VHF radio' })
  @Expose()
  description?: string;

  @Expose()
  @Type(() => ResponseVesselCommunicationEquipmentDto)
  communicationEquipments: ResponseVesselCommunicationEquipmentDto[];
}
