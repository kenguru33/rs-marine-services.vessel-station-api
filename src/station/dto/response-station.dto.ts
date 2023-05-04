import { IsNumber, IsString } from "class-validator";

export class StationResponseDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  type?: {
      id: number;
      name: string;
      description: string;
  }
  latitude: number;
  longitude: number;
  postalCode: string;
  postalAddress: string;
  postalLocation: string;
  vessels?: {
      id: number;
      name: string;
      rs: number;
  }[];
}