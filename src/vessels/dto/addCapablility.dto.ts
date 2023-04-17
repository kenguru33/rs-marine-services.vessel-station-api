import { IsNotEmpty, IsNumber } from 'class-validator';

export class addCapabilityDto {
  @IsNumber()
  capabilityId: number;
}
