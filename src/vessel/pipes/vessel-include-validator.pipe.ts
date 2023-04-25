import { PipeTransform, BadRequestException } from '@nestjs/common';

export class VesselIncludeValidatorPipe implements PipeTransform {
  transform(value: any) {
    const allowedIncludes = [
      'state',
      'class',
      'capabilities',
      'state.stateCategory',
      'station',
    ];
    const includes = value?.split(',');
    if (!includes) {
      return value;
    }
    const isValid = includes.every((include: string) =>
      allowedIncludes.includes(include),
    );
    if (!isValid) {
      throw new BadRequestException(
        `Invalid include query parameter. Allowed values are ${allowedIncludes.join(
          ', ',
        )}`,
      );
    }
    return value;
  }
}
