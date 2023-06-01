import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseAccommodationTypeDto } from '../dto/response-accommodation-type.dto';

@Injectable()
export class StationAccommodatoionTypeResponseTransformInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseAccommodationTypeDto | ResponseAccommodationTypeDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return data.map((d) => {
            return plainToInstance(ResponseAccommodationTypeDto, d, {
              excludeExtraneousValues: true,
            });
          });
        } else {
          return plainToInstance(ResponseAccommodationTypeDto, data, {
            excludeExtraneousValues: true,
          });
        }
      }),
    );
  }
}
