import { Expose, Type } from 'class-transformer';
import { ResponseVesselStateCategoryDto } from '../vessel-state-category/dto/response-vessel-state-category.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseVesselStateDto {
  @ApiProperty({ example: 1 })
  @Expose()
  id: number;

  @ApiProperty({ example: 'Ledig på base' })
  @Expose()
  name: string;

  @ApiProperty({
    example: 'Fartøy ligger ved stasjonen og er ledig for oppdrag',
  })
  @Expose()
  description?: string;

  stateCategpryId: number;

  @Type(() => ResponseVesselStateCategoryDto)
  @Expose()
  stateCategory: ResponseVesselStateCategoryDto;
}
