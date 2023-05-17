import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseVesselClassDto } from '../../vessel-class/dto/response-vessel-class.dto';
import { ResponseVesselTypeDto } from '../dto/response-vessel-type.dto';

@Injectable()
export class VesselTypeTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseVesselTypeDto | ResponseVesselTypeDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return plainToInstance(ResponseVesselTypeDto, data, {
            excludeExtraneousValues: true,
          });
        }
        return plainToInstance(ResponseVesselTypeDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
