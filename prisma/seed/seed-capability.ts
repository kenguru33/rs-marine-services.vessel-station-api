import { PrismaClient, VesselCapability } from '@prisma/client';
import { Kapasiteter } from './constants';

const prisma = new PrismaClient();

export const seedCapabilities = async function () {
  const capabilities: Array<VesselCapability> = [];

  for (const capabilityName in Kapasiteter) {
    let capability = await prisma.vesselCapability.upsert({
      where: { name: capabilityName },
      update: {},
      create: {
        name: capabilityName,
        description: 'Kapasitet for ' + capabilityName,
      },
    });
    capabilities.push(capability);
  }
  return capabilities;
};
