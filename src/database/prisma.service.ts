import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

type IncludeObject<T> = {
  [K in keyof T]?: boolean | IncludeObject<T[K]> ;
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
    
    if (!includes) {
      return undefined; // no includes
    }

    const includeArray = includes?.split(',').map((i) => i.trim());

    const includeObject: IncludeObject<T> = {};
    let currentInclude = includeObject; // root
    
    for (const include of includeArray) {
      const relations = include.split('.');
      if (relations.length === 1) {
        // no nested relations
        currentInclude[relations[0] as keyof IncludeObject<T>] = true;
      } else {
        // nested relations
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
