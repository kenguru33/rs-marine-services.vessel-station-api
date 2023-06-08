import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseStationAgreementTypeDto } from '../dto/response-station-agreement-type.dto';

@Injectable()
export class StationAgreementTypeResponseTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseStationAgreementTypeDto | ResponseStationAgreementTypeDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return data.map((d) => {
            return plainToInstance(ResponseStationAgreementTypeDto, d, {
              excludeExtraneousValues: true,
            });
          });
        } else {
          return plainToInstance(ResponseStationAgreementTypeDto, data, {
            excludeExtraneousValues: true,
          });
        }
      }),
    );
  }
}
