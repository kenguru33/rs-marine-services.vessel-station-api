import { IsNotEmpty, IsString } from "class-validator";

export class CreateStationDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
