import { Station, Vessel } from "@prisma/client";

export class StationResponseDto {
  id: number;
  name: string;
  Vessels: {
    id: number;
    name: string;
  }
}