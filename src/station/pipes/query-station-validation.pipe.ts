import { PipeTransform, BadRequestException } from '@nestjs/common';
import { QueryStationDto } from '../dto/query-station.dto';
import { validate, validateSync } from 'class-validator';
import { plainToClass, plainToInstance } from 'class-transformer';

export class QueryStationValidationPipe implements PipeTransform {
  async transform(params: any) {
    console.log(params)
    const queryStationDto = plainToClass(QueryStationDto, params);
    const errors = await validate(queryStationDto, { forbidUnknownValues: true,  });
    
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const allowedIncludes = ['type', 'vessels'];
    const allowedWhere = ['type', 'name'];

    const { include, ...where } = params;
    const includes = include?.split(',');
    const wheres = Object.keys(where);

    if (includes)
    includes.forEach((include: string) => {
      if (!allowedIncludes.includes(include.trim()))
        throw new BadRequestException(
          `Invalid include value: ${include}. Allowed values are ${allowedIncludes.join(
            ', ',
          )}`,
        );
    });

    if (wheres)
    wheres.forEach((where: string) => {
      if (!allowedWhere.includes(where.trim()))
        throw new BadRequestException(
          `Invalid query parameter: ${where}. Allowed values are include, ${allowedWhere.join(
            ', ',
          )}`,
        );
    });

    // return {
    //   include: includes?.join(','),
    //   where: {
    //     name: where.name ? { contains: where.name } : undefined,
    //     type: {
    //       connect: where.type ? { id: where.type } : undefined,
    //     }
        
    //   }
    // }
    return queryStationDto
  }
}
