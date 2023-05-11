import { Vessel } from '@prisma/client';
import { Expose, Type } from 'class-transformer';
import { ResponseVesselCommunicationEquipmentTypeDto } from '../vessel-communication-equipment-type/dto/response-vessel-communication-equipment-type';

export class ResponseVesselCommunicationEquipmentDto {
  @Expose()
  id: number;

  @Type(() => ResponseVesselCommunicationEquipmentTypeDto)
  @Expose()
  type: ResponseVesselCommunicationEquipmentTypeDto

  numberOfUnits: number;

  vesselId: number;
}
