import { PrismaClient } from '@prisma/client';
import { seedCapabilities } from './seed/seed-capability';
import { seedVesselClasses } from './seed/seed-class';
import { seedStateCategories } from './seed/seed-state-category';
import { seedStations } from './seed/seed-station';
import { seedVessels } from './seed/seed-vessel';
import { seedStationAccommodationTypes } from './seed/seed-station-accommodation-type';
import { seedStationPierTypes } from './seed/seed-station-pier-type';
import { seedStationTypes } from './seed/seed-station-type';
import { seedVesselTypes } from './seed/seed-vessel-type';
import { seedStationPier } from './seed/seed-station-pier';
import { seedStationAccommodation } from './seed/seed-station-accommodation';
import { seedStationAgreementTypes } from './seed/seed-agreement-type';

const prisma = new PrismaClient();
async function main() {
  console.log('Seeding capabilities');
  const capabilities = await seedCapabilities();

  console.log('Seeding vessel classes');
  const classes = await seedVesselClasses();

  console.log('Seeding vessel state categories');
  const stateCategories = await seedStateCategories();

  console.log('Seeding station accommodation types');
  const accommodationTypes = await seedStationAccommodationTypes();

  console.log('Seeding station pier types');
  const pierTypes = await seedStationPierTypes();

  console.log('Seeding station types');
  const stationTypes = await seedStationTypes();

  console.log('Seeding stations');
  const stations = await seedStations();

  console.log('Seeding vessel types');
  const vesselTypes = await seedVesselTypes();

  console.log('Seeding station piers');
  const piers = await seedStationPier();

  console.log('Seeding station accommodations');
  const accommodations = await seedStationAccommodation();

  console.log('Seeding station agreement types');
  const agreementTypes = await seedStationAgreementTypes();

  console.log('Seeding vessels');
  const vessels = await seedVessels(capabilities, stations, classes);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
