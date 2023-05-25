import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseVesselCommEquipDto } from '../dto/response-vessel-comm-equip.dts';

@Injectable()
export class VesselCommEquipTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseVesselCommEquipDto | ResponseVesselCommEquipDto[]> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return plainToInstance(ResponseVesselCommEquipDto, data, {
            excludeExtraneousValues: true,
          });
        }
        return plainToInstance(ResponseVesselCommEquipDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
