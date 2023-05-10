import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseVesselBuildInfoDto } from '../dto/response-vessel-build-info.dts';

@Injectable()
export class VesselBuildInfoResponseTransformInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseVesselBuildInfoDto | ResponseVesselBuildInfoDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return plainToInstance(ResponseVesselBuildInfoDto, data, {
            excludeExtraneousValues: true,
          });
        }
        return plainToInstance(ResponseVesselBuildInfoDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
