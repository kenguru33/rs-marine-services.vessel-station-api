import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { QueryStationDto } from '../dto/request/query-station.dto';
import { validateSync } from 'class-validator';
import { allowedIncludes, allowedWhere } from '../constants';
import { ResponseStationDto } from '../dto/response/response-station.dto';

@Injectable()
export class StationTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseStationDto | ResponseStationDto[]> {
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

    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return data.map((d) => {
            console.log(d);
            return plainToInstance(ResponseStationDto, d, {
              excludeExtraneousValues: true,
            });
          });
        } else {
          return plainToInstance(ResponseStationDto, data, {
            excludeExtraneousValues: true,
          });
        }
      }),
    );
  }
}
