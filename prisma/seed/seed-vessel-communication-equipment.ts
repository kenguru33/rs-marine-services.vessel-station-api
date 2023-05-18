import { faker } from '@faker-js/faker';
import { PrismaClient, VesselCommunicationEquipment, VesselCommunicationEquipmentType } from '@prisma/client';
const prisma = new PrismaClient();

const communicationEquipments = async () => {
  const vesselCount = async () => await prisma.vessel.count();
  const vesselCommunicationEquipmentTypeCount = async () => await prisma.vesselCommunicationEquipmentType.count();

  return [
    {
      vesselId: faker.number.int({ min: 1, max: await vesselCount() }),
      description: faker.lorem.sentence(),
      typeId: faker.number.int({ min: 1, max: await vesselCommunicationEquipmentTypeCount() }),
      numberOfUnits: faker.number.int({ min: 1, max: 5 }) as number,
    },
    {
      vesselId: faker.number.int({ min: 1, max: await vesselCount() }),
      description: faker.lorem.sentence(),
      typeId: faker.number.int({ min: 1, max: await vesselCommunicationEquipmentTypeCount() }),
      numberOfUnits: faker.number.int({ min: 1, max: 5 }) as number,
    },
    {
      vesselId: faker.number.int({ min: 1, max: await vesselCount() }),
      description: faker.lorem.sentence(),
      typeId: faker.number.int({ min: 1, max: await vesselCommunicationEquipmentTypeCount() }),
      numberOfUnits: faker.number.int({ min: 1, max: 5 }) as number,
    },
    {
      vesselId: faker.number.int({ min: 1, max: await vesselCount() }),
      description: faker.lorem.sentence(),
      typeId: faker.number.int({ min: 1, max: await vesselCommunicationEquipmentTypeCount() }),
      numberOfUnits: faker.number.int({ min: 1, max: 5 }) as number,
    },
    {
      vesselId: faker.number.int({ min: 1, max: await vesselCount() }),
      description: faker.lorem.sentence(),
      typeId: faker.number.int({ min: 1, max: await vesselCommunicationEquipmentTypeCount() }),
      numberOfUnits: faker.number.int({ min: 1, max: 5 }) as number,
    },
    {
      vesselId: faker.number.int({ min: 1, max: await vesselCount() }),
      description: faker.lorem.sentence(),
      typeId: faker.number.int({ min: 1, max: await vesselCommunicationEquipmentTypeCount() }),
      numberOfUnits: faker.number.int({ min: 1, max: 5 }) as number,
    },
    {
      vesselId: faker.number.int({ min: 1, max: await vesselCount() }),
      description: faker.lorem.sentence(),
      typeId: faker.number.int({ min: 1, max: await vesselCommunicationEquipmentTypeCount() }),
      numberOfUnits: faker.number.int({ min: 1, max: 5 }) as number,
    },
  ];
};

export const seedCommunicationEquipment = async function () {
  const models: Array<VesselCommunicationEquipment> = [];
  const vesselCount = await prisma.vessel.count();
  const typeCount = await prisma.vesselCommunicationEquipmentType.count();

  for (let i=1; i <= vesselCount*3; i++) {
    let model = await prisma.vesselCommunicationEquipment.upsert({
      where: { id: faker.number.int({min: 1, max: vesselCount}) },
      update: {},
      create: {
        description: faker.lorem.sentence(),
        numberOfUnits: faker.number.int({ min: 1, max: 5 }) as number,
        vessel: {
          connect: {
            id: faker.number.int({ min: 1, max: vesselCount })
          },
        },
        type: {
          connect: {
            id: faker.number.int({ min: 1, max: typeCount })
          },
        },
      },
    });
    models.push(model);
  }
  return models;
};

