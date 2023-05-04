import { Expose, Type } from 'class-transformer';
import { ResponseVesselClassDto } from './response-vessel-class.dto';
import { ResponseVessselTypeDto } from './response-vessel-type.dto';
import { ResponseVesselStateDto } from './response-vessel-state.dto';
import { ResponseVesselCapabilityDto } from './response-vessel-capability.dto';

export class ResponseVesselDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  rs: number;

  stationId: number;

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
