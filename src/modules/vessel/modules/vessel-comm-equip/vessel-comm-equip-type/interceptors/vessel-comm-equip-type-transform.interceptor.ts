import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseVesselCommEquipTypeDto } from '../dto/response-vessel-comm-equip-type';

@Injectable()
export class VesselCommEquipTypeTransformInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<
    ResponseVesselCommEquipTypeDto | ResponseVesselCommEquipTypeDto[]
  > {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return plainToInstance(ResponseVesselCommEquipTypeDto, data, {
            excludeExtraneousValues: true,
          });
        }
        return plainToInstance(ResponseVesselCommEquipTypeDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
