import { Expose, Type } from 'class-transformer';
import { ResponseVesselDto } from '../../../dto/response-vessel.dto';
import { ResponseVesselCommEquipTypeDto } from '../vessel-comm-equip-type/dto/response-vessel-comm-equip-type';

export class ResponseVesselCommEquipDto {
  @Expose()
  id: number;

  @Type(() => ResponseVesselCommEquipTypeDto)
  @Expose()
  type: ResponseVesselCommEquipTypeDto;

  @Expose()
  numberOfUnits: number;

  @Type(() => ResponseVesselDto)
  @Expose()
  vessel: ResponseVesselDto;

  vesselId: number;
}
