import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateCapabilityDto } from 'src/vessels/capabilities/dto/createCapability.dto';
import { CreateStationDto } from 'src/stations/createStation.dto';

export class CreateVesselDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsNumber()
  rs: number;

  @IsNumber()
  vesselClassId: number; 

  @IsArray()
  capabilityIds: number[];
  
  @IsOptional()
  stationId?: number;
}
