import { PipeTransform, BadRequestException } from '@nestjs/common';

export class QueryVesselValidatorPipe implements PipeTransform {
  transform(value: any) {
    console.log('value: ', value);
    const allowedIncludes = [
      'state',
      'class',
      'capabilities',
      'state.stateCategory',
      'station',
      'type'
    ];
    const allowedWhere = ['name', 'rs'];
    const { include, ...where } = value;
    const includes = include?.split(',');
    const wheres = Object.keys(where);

    if (includes) {
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
    }

    if (wheres.length > 0) {
      const isValid = wheres.every((where: string) =>
        allowedWhere.includes(where),
      );
      if (!isValid) {
        throw new BadRequestException(
          `Invalid where query parameter. Allowed values are ${allowedWhere.join(
            ', ',
          )}`,
        );
      }
    }
    return value;
  }
}
