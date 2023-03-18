import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStationDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
