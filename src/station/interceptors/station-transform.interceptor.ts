import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { QueryStationDto } from '../dto/query-station.dto';
import { validateSync } from 'class-validator';
import { allowedIncludes, allowedWhere } from '../constants';

@Injectable()
export class StationTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<QueryStationDto> {
    const query = context.switchToHttp().getRequest().query;
    const queryStationDto = plainToInstance(QueryStationDto, query, {
      excludeExtraneousValues: true,
    });

    const { include, ...where } = query;
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

    const errors = validateSync(queryStationDto, { forbidUnknownValues: true });
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    // TODO: validate create response dto and transform to it
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return data.map((d) => {
            delete d.typeId;
            return d;
          });
        }
        return data;
      }),
    );
  }
}
