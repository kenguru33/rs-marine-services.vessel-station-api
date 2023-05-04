import { PrismaClient, StationAccommodation } from '@prisma/client';
const prisma = new PrismaClient();

export const seedStationAccommodation = async function () {

  const randomStationId = async () => {
    const numberofStations = await prisma.station.count();
    const randomStation = Math.floor(Math.random() * numberofStations) + 1;
    return randomStation;
  }

  const randomAccommodationId = async () => {
    const numberofAccommodations = await prisma.stationAccommodation.count();
    const randomAccommodation = Math.floor(Math.random() * numberofAccommodations) + 1;
    return randomAccommodation;
  }

  const models: Array<StationAccommodation> = [];
  const stations = await prisma.station.findMany();

  for (const station of stations) {
    let model = await prisma.stationAccommodation.upsert({
      where: { stationId: station.id },
      update: {},
      create: {
        typeId: await randomAccommodationId(),
        address: station.address,
        stationId: station.id,
        postalCode: station.postalCode,
        latitude: station.latitude,
        longitude: station.longitude,
        postalLocation: station.postalLocation,
        postalBox: station.postalBox,
      },
    }
      
    );
    models.push(model);
  }
  return models;
};

