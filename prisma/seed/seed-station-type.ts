import { PrismaClient, StationType } from '@prisma/client';
const prisma = new PrismaClient();

const stationTypes = [
  {
    name: 'FASTE',
    description: 'Faste stasjoner',
  },
  {
    name: 'RSRK',
    description: 'Frivillige skøyter',
  },
  {
    name: 'Ambulanse',
    description: 'Ambulansebåter',
  },
];

export const seedStationTypes = async function () {
  const models: Array<StationType> = [];

  for (const type of stationTypes) {
    let model = await prisma.stationType.upsert({
      where: { name: type.name },
      update: {},
      create: {
        name: type.name,
        description: type.description,
      },
    });
    models.push(model);
  }
  return models;
};
