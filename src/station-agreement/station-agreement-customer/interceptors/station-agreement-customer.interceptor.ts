import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseStationAgreementCustomerDto } from '../dto/response-station-agreement-customer.dto';

@Injectable()
export class StationAgreementCustomerResponseTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseStationAgreementCustomerDto | ResponseStationAgreementCustomerDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return data.map((d) => {
            return plainToInstance(ResponseStationAgreementCustomerDto, d, {
              excludeExtraneousValues: true,
            });
          });
        } else {
          return plainToInstance(ResponseStationAgreementCustomerDto, data, {
            excludeExtraneousValues: true,
          });
        }
      }),
    );
  }
}
