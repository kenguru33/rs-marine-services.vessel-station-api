import { Expose, Type } from 'class-transformer';
import { ResponseVesselClassDto } from '../vessel-class/dto/response-vessel-class.dto';
import { ResponseVesselTypeDto } from '../vessel-type/dto/response-vessel-type.dto';
import { ResponseVesselStateDto } from '../modules/vessel-state/dto/response-vessel-state.dto';
import { ResponseVesselCapabilityDto } from '../modules/vessel-capability/dto/response-vessel-capability.dto';
import { ResponseStationDto } from '../../station/dto/response-station.dto';
import { ResponseVesselInspectorDto } from '../modules/vessel-inspector/dto/response-vessel-inspector.dto';
import { ResponseVesselCommunicationEquipmentDto } from '../modules/vessel-communication-equipment/dto/response-vessel-communication-equipment.dts';
import { ResponseVesselMaintenanceDto } from '../modules/vessel-maintenance/dto/response-vessel-maintenance.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'Bernt Anker' })
  @Expose()
  name: string;

  @ApiProperty({ example: '225' })
  @Expose()
  rs: number;

  @ApiProperty({ example: '123456789' })
  @Expose()
  mmsi: number;

  @ApiProperty({ example: 'RS' })
  @Expose()
  prefix: string;

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

  @Type(() => ResponseVesselTypeDto)
  @Expose()
  type: ResponseVesselTypeDto;

  capabilityIds: number[];

  @Expose()
  @Type(() => ResponseVesselCapabilityDto)
  capabilities: ResponseVesselCapabilityDto[];

  @Expose()
  @Type(() => ResponseVesselInspectorDto)
  inspector: ResponseVesselInspectorDto;

  @Expose()
  @Type(() => ResponseVesselCommunicationEquipmentDto)
  communicationEquipments: ResponseVesselCommunicationEquipmentDto[];

  @Expose()
  @Type(() => ResponseVesselInspectorDto)
  inspectors: ResponseVesselInspectorDto[];

  @Expose()
  @Type(() => ResponseVesselMaintenanceDto)
  maintenances: ResponseVesselMaintenanceDto[];
}
