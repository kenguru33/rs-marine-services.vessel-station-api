import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateCapabilityDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsString()
  description?: string;
}
