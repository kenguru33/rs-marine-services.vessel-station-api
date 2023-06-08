import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ResponseVesselCommunicationEquipmentDto } from '../dto/response-vessel-communication-equipment.dts';

@Injectable()
export class VesselCommunicationEquipmentTransformInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<
    | ResponseVesselCommunicationEquipmentDto
    | ResponseVesselCommunicationEquipmentDto[]
  > {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return plainToInstance(
            ResponseVesselCommunicationEquipmentDto,
            data,
            {
              excludeExtraneousValues: true,
            },
          );
        }
        return plainToInstance(ResponseVesselCommunicationEquipmentDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
