import { ApiProperty } from "@nestjs/swagger";
import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional, IsPostalCode, IsString } from "class-validator";

export class CreateStationDto {
  @ApiProperty({ example: 'Tortuga'})
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  typeId: number;

  @ApiProperty({ example: 'Jack Sparrow' })
  @ApiProperty()
  @IsOptional()
  @IsString()
  tilFelt?: string;

  @ApiProperty({ example: 'Twelve Daggers 12' })
  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty({ example: '1234' })
  @ApiProperty()
  @IsPostalCode('NO')
  postalCode: string;

  @ApiProperty({ example: 12 })
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  postalBox?: number;

  @ApiProperty({ example: 'Salty Cove' })
  @ApiProperty()
  @IsString()
  postalLocation: string;

  @ApiProperty({ example: 69.420 })
  @ApiProperty()
  @IsLatitude()
  latitude: number;

  @ApiProperty({ example: 12.420 })
  @ApiProperty()
  @IsLongitude()
  longitude: number;

  @ApiProperty({ example: '1234' })
  @ApiProperty()
  @IsString()
  @IsOptional() 
  postalDelivery?: string;
}
