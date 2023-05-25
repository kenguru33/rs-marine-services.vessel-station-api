import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { ResponseVesselDto } from "../../../dto/response-vessel.dto";

export class ResponseVesselCapabilityDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'Dykking' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Dykking ned til 50m' })
  @Expose()
  description?: string;

  @Expose()
  @Type(() => ResponseVesselDto)
  vessels: ResponseVesselDto[];

}