import { Station, Vessel } from "@prisma/client";

export class StationResponseDto implements Station {
  id: number;
  name: string;
  Vessels: {
    id: number;
    name: string;
  }

  

}