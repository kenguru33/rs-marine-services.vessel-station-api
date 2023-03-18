import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateCapabilityDto } from 'src/vessels/capabilities/dto/createCapability.dto';

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
  
  @IsOptional()
  stationId?: number;
}
