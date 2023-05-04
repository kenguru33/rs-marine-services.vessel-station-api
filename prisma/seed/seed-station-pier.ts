import { PrismaClient, StationPier } from '@prisma/client';
const prisma = new PrismaClient();

export const seedStationPier = async function () {

  const randomStationId = async () => {
    const numberofStations = await prisma.station.count();
    const randomStation = Math.floor(Math.random() * numberofStations) + 1;
    return randomStation;
  }

  const randomStationPierTypeId = async () => {
    const numberofStationPierTypes = await prisma.stationPierType.count();
    const randomStationPierType = Math.floor(Math.random() * numberofStationPierTypes) + 1;
    return randomStationPierType;
  }

  const models: Array<StationPier> = [];
  const stations = await prisma.station.findMany();

  for (const station of stations) {
    let model = await prisma.stationPier.upsert({
      where: { stationId: station.id },
      update: {},
      create: {
        stationId: station.id,
        typeId: await randomStationPierTypeId(),
        length: Math.floor(Math.random() * 10) + 1,
        width: Math.floor(Math.random() * 5) + 1,
        minimumDepth: Math.floor(Math.random() * 20) + 1,
        floating: false,
        diesel: false,
        petrol: false,
        storageSpace: false,
        coldWater: false,
        hotWater: false,
      },
    }
      
    );
    models.push(model);
  }
  return models;
};


// name: station.name + ' - ' + 'Brygge',
        // stationId: station.id,
        // typeId: await randomStationId(),
        // length: Math.floor(Math.random() * 10) + 1,
        // width: Math.floor(Math.random() * 5) + 1,
        // minimumDepth: Math.floor(Math.random() * 20) + 1,
        // floating: false,
        // diesel: false,
        // petrol: false,
        // storageSpace: false,
        // coldWater: false,
        // hotWater: false,