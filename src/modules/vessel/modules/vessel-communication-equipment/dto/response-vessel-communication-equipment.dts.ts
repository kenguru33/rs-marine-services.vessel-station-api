import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../../dto/response-vessel.dto';
import { ResponseVesselCommunicationEquipmentTypeDto } from '../vessel-communication-equipment-type/dto/response-vessel-communication-equipment-type';

export class ResponseVesselCommunicationEquipmentDto {
  @Expose()
  id: number;

  @Type(() => ResponseVesselCommunicationEquipmentTypeDto)
  @Expose()
  type: ResponseVesselCommunicationEquipmentTypeDto

  @Expose()
  numberOfUnits: number;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessel: ResponseVesselDto

  vesselId: number;
}
