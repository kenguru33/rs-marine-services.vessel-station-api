import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateCapabilityDto } from 'src/vessels/capabilities/dto/createCapability.dto';
import { CreateStationDto } from 'src/stations/createStation.dto';

export class addCapabilityDto {
  @IsNumber()
  capabilityId: number;
}
