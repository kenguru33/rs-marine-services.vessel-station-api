import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateVesselCapabilityDto } from 'src/vessel-capabilities/dto/createVesselCapability.dto';

export class addCapabilityDto {
  @IsNumber()
  capabilityId: number;
}
