import { PrismaClient, StationAccommodationType } from '@prisma/client';
const prisma = new PrismaClient();

const accommodationTypes = [
  {
    name: 'Bolig',
    description: 'Innlosjeringsmuligheter',
  },
  {
    name: 'Leilighet',
    description: 'Innlosjeringsmuligheter',
  },
];

export const seedStationAccommodationTypes = async function () {
  const Models: Array<StationAccommodationType> = [];

  for (const accommodationType of accommodationTypes) {
    let accommodationTypeModel = await prisma.stationAccommodationType.upsert({
      where: { name: accommodationType.name },
      update: {},
      create: {
        name: accommodationType.name,
        description: accommodationType.description,
      },
    });
    Models.push(accommodationTypeModel);
  }
  return Models;
};
