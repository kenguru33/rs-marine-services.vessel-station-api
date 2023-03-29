import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateVesselCapabilityDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsString()
  description?: string;
}
