import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseVesselDto } from '../../../dto/response-vessel.dto';
import { ResponseVesselCrewDto } from '../dto/response-vessel-crew.dto';

@Injectable()
export class VesselCrewResponseTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseVesselCrewDto | ResponseVesselCrewDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return plainToInstance(ResponseVesselCrewDto, data, {
            excludeExtraneousValues: true,
          });
        }
        return plainToInstance(ResponseVesselCrewDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
