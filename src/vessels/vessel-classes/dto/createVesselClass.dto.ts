import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVesselClassDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  range: number; // in nautical miles
  @IsNumber()
  speed: number; // in knots
}