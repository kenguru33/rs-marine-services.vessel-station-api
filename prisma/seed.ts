import { PrismaClient } from '@prisma/client';
import { seedCapabilities } from './seed/seed-capability';
import { seedVesselClasses } from './seed/seed-class';
import { seedStateCategories } from './seed/seed-state-category';
import { seedStations } from './seed/seed-station';
import { seedVessels } from './seed/seed-vessel';

const prisma = new PrismaClient();
async function main() {

  // console.log('Seeding capabilities');
  // const capabilities = await seedCapabilities();

  // console.log('Seeding vessel classes');
  // const classes = await seedVesselClasses();

  // console.log('Seeding vessel state categories');
  // const stateCategories = await seedStateCategories();

  // // console.log('Seeding station address types');
  // // const stationAddressTypes = await seedStationAddressTypes();



  // console.log('Seeding stations');
  // const stations = await seedStations();

  // console.log('Seeding vessels');
  // const vessels = await seedVessels(capabilities, stations, classes);

  // console.log({
  //   capabilities,
  //   classes,
  //   stateCategories,
  //   stations,
  //   vessels,
  // });
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
