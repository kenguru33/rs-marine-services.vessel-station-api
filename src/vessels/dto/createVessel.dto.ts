import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateVesselCapabilityDto } from 'src/vessel-capabilities/dto/createVesselCapability.dto';

export class CreateVesselDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  rs: number;

  @IsNumber()
  vesselClassId: number;

  @IsArray()
  @IsOptional()
  capabilityIds?: number[];

  @IsNumber()
  @IsOptional()
  stationId?: number;

  @IsNumber()
  stateId: number;
  
}
