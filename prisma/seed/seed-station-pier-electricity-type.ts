import { PrismaClient, StationPierElictricityType } from '@prisma/client';
const prisma = new PrismaClient();

const electricityTypes = [
  {
    name: '230V/16A',
    description: '230V - 20A - 1 fase',
  },
  {
    name: '400V/20A',
    description: '400V - 20A - 3 fase',
  },
];

export const seedStationElectricityTypes = async function () {
  const models: Array<StationPierElictricityType> = [];

  for (const electricityType of electricityTypes) {
    let model = await prisma.stationPierElictricityType.upsert({
      where: { name: electricityType.name },
      update: {},
      create: {
        name: electricityType.name,
        description: electricityType.description,
      },
    });
    models.push(model);
  }
  return models;
};
