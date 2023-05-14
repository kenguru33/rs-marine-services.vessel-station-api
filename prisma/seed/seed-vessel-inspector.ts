import { faker } from '@faker-js/faker';
import { PrismaClient, VesselInspector } from '@prisma/client';
const prisma = new PrismaClient();

export const seedVesselInspectors = async function () {
  const inspectors: Array<VesselInspector> = [];

  for (let i = 0; i < 5; i++) {
    const name = faker.person.fullName();
    const inspector = await prisma.vesselInspector.create({
      data: {
        name,
        email: faker.internet.email(),
        phone: faker.phone.number(),
      },
    });
    inspectors.push(inspector);
  }
  return inspectors;
};
