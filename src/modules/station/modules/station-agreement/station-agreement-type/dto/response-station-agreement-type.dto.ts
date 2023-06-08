import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class ResponseStationAgreementTypeDto {
  
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'agreement type' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'agreement type description' })
  @Expose()
  description: string;
}
