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
import { seedStationAgreementTypes } from './seed/seed-station-agreement-type';
import { seedCommunicationEquipmentTypes } from './seed/seed-vessel-communication-equipment-type';
import { seedStationAgreementCustomer } from './seed/seed-station-agreement-customer';
import { seedCommunicationEquipment } from './seed/seed-vessel-communication-equipment';
import { seedVesselInspectors } from './seed/seed-vessel-inspector';
import { seedStationElectricityTypes } from './seed/seed-station-pier-electricity-type';
import { seedVesselCrew } from './seed/seed-vessel-crew';

const prisma = new PrismaClient();
async function main() {

  // seed lookup types and objects
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

  console.log('Seeding vessel types');
  const vesselTypes = await seedVesselTypes();

  console.log('Seeding station agreement types');
  const agreementTypes = await seedStationAgreementTypes();

  console.log('Seeding vessel communication equipment types');
  const communicationEquipmentTypes = await seedCommunicationEquipmentTypes();

  console.log('Seeding station pier electricy types');
  const electricityTypes = await seedStationElectricityTypes();

  // concrete objects
  console.log('Seeding stations');
  const stations = await seedStations();

  console.log('Seeding station piers');
  const piers = await seedStationPier();

  console.log('Seeding station accommodations');
  const accommodations = await seedStationAccommodation();

  console.log('Seeding station agreement customers');
  const agreementCustomers = await seedStationAgreementCustomer();

  console.log('Seeding vessel inspectors');
  const inspectors = await seedVesselInspectors();

  console.log('Seeding vessels');
  const vessels = await seedVessels(capabilities, stations, classes);

  console.log('Seeding vessel communication equipment');
  const communicationEquipment = await seedCommunicationEquipment();

  console.log('Seeding vessel crew');
  const vesselCrew = await seedVesselCrew();
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
