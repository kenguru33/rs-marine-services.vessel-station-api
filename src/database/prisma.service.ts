import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

type IncludeObject<T> = {
  [K in keyof T]?: boolean | IncludeObject<T[K]> | 'include' | 'select';
} 

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  /**
   * Parses a string of includes to a Prisma.Include<T> object
   * @param includes string of includes, e.g. 'station,state.stateCategory'
   * @returns Prisma.Include<T> | undefined
   */
  async parseInclude<T>(includes: string): Promise<T | undefined> {
    const includeArray = includes?.split(',').map((i) => i.trim());
    if (!includeArray) {
      return undefined; // no includes
    }

    const includeObject: IncludeObject<T> = {};
    let currentInclude = includeObject; // root
    
    for (const include of includeArray) {
      const relations = include.split('.');
      if (relations.length === 1) {
        //
        currentInclude[relations[0] as keyof IncludeObject<T>] = true;
      } else {
        // relations.length > 1
        for (const relation of relations) {
          if (relation === relations[relations.length - 1]) {
            currentInclude[relation as keyof IncludeObject<T>] = true;
            currentInclude = includeObject; // reset
          } else {
            currentInclude = currentInclude[
              relation as keyof IncludeObject<T>
            ] = {};
            currentInclude = currentInclude[
              'include' as keyof IncludeObject<T>
            ] = {}; // go deeper
          }
        }
      }
    }
    return includeObject as T
  }
}
