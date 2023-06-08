import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateVesselCapabilityDto {
  @ApiProperty({
    description: 'The name of the vessel capability',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The description of the vessel capability',
    required: false,
  })
  @IsString()
  description?: string;
}
