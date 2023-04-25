import { PrismaClient } from '@prisma/client';
import { seedCapabilities} from './seed/seed-capability';
import { seedVesselClasses } from './seed/seed-class';
import { seedStateCategories } from './seed/seed-state-category';
import { seedStations } from './seed/seed-station';
import { seedVessels } from './seed/seed-vessel';

const prisma = new PrismaClient();
async function main() {

  
  const capabilities = await seedCapabilities();
  const classes = await seedVesselClasses();
  const stateCategories = await seedStateCategories();
  const stations = await seedStations();
  const vesels = await seedVessels(capabilities, stations, classes);

  console.log({ capabilities, classes, stateCategories, stations, vesels });
  

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
function seedVesselStateCategories() {
  throw new Error('Function not implemented.');
}


