import { PrismaClient, StationType } from '@prisma/client';
const prisma = new PrismaClient();

const vesselTypes = [
  {
    name: 'Fast bemannet',
    description: 'Faste bemannet skøyte',
  },
  {
    name: 'Sjøredningsskorps',
    description: 'Frivillige bemannet skøyter',
  },
  {
    name: 'Støttefartøy',
    description: 'Støttefortøy for andre fartøy',
  },
  {
    name: 'Ambulanse',
    description: 'Støttefortøy for andre fartøy',
  },
];

export const seedVesselTypes = async function () {
  const models: Array<StationType> = [];

  for (const type of vesselTypes) {
    let model = await prisma.vesselType.upsert({
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
