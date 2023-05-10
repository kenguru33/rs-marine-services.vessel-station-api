import { Expose, Type } from 'class-transformer';
import { ResponseVesselClassDto } from '../vessel-class/dto/response-vessel-class.dto';
import { ResponseVessselTypeDto } from '../vessel-type/dto/response-vessel-type.dto';
import { ResponseVesselStateDto } from '../modules/vessel-state/dto/response-vessel-state.dto';
import { ResponseVesselCapabilityDto } from '../modules/vessel-capability/dto/response-vessel-capability.dto';
import { ResponseStationDto } from '../../station/dto/response-station.dto';

export class ResponseVesselDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  rs: number;

  stationId: number;

  @Type(() => ResponseStationDto)
  @Expose()
  station: ResponseStationDto;

  classId: number;

  @Type(() => ResponseVesselClassDto)
  @Expose()
  class: ResponseVesselDto;

  stateId: number;

  @Type(() => ResponseVesselStateDto)
  @Expose()
  state: ResponseVesselStateDto;

  typeId: number;

  @Type(() => ResponseVessselTypeDto)
  @Expose()
  type: ResponseVessselTypeDto;

  capabilityIds: number[];

  @Expose()
  @Type(() => ResponseVesselCapabilityDto)
  capabilities: ResponseVesselCapabilityDto[];
}
