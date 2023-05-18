// import { PrismaClient, Station, StationAddressType } from '@prisma/client';
// const prisma = new PrismaClient();

// const stationAddressTypes = [
//   {
//     name: 'Fartøy',
//     description: 'Stasjonsadresse for fartøy',
//   },
//   {
//     name: 'Leilighet',
//     description: 'Stasjonsadresse for leilighet',
//   },
//   {
//     name: 'Postboks',
//     description: 'Postboks adresse',
//   }
// ]

// export const seedStationAddressTypes = async () => {
//   const stationAddressTypeModels: Array<StationAddressType> = [];

//   for (const stationAddressType of stationAddressTypes) {
//     let stationAddressTypeModel = await prisma.stationAddressType.upsert({
//       where: { name: stationAddressType.name },
//       update: {},
//       create: {
//         name: stationAddressType.name,
//         description: stationAddressType.description,
//       },
//     });
//     stationAddressTypeModels.push(stationAddressTypeModel);
//   }
//   return stationAddressTypeModels;
// }