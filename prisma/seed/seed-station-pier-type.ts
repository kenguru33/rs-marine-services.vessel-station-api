import { PrismaClient, StationPierType } from '@prisma/client';
const prisma = new PrismaClient();

const pierTypes = [
  {
    name: 'Langside',
    description: 'Legge til kai langsiden',
  },
  {
    name: 'Bås',
    description: 'Legge til kai i bås',
  },
];

export const seedStationPierTypes = async function () {
  const models: Array<StationPierType> = [];

  for (const pierType of pierTypes) {
    let model = await prisma.stationPierType.upsert({
      where: { name: pierType.name },
      update: {},
      create: {
        name: pierType.name,
        description: pierType.description,
      },
    });
    models.push(model);
  }
  return models;
};
