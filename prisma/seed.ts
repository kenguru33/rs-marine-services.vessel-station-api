import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const operativ = await prisma.vesselStateCategory.upsert({
    where: { name: 'Operativ' },
    update: {},
    create: {
      description: 'Status hovedkategori',
      name: 'Operativ',
      states: {
        create: [
          {
            description: 'Operativ status underkategori',
            name: 'Ledig på basen',
          },
          {
            description: 'Operativ status underkategori',
            name: 'Ledig på patrulje',
          },
        ],
      },
    },
  });

  const uad = await prisma.vesselStateCategory.upsert({
    where: { name: 'UAD' },
    update: {},
    create: {
      description: 'Status hovedkategori',
      name: 'UAD',
      states: {
        create: [
          {
            description: 'UAD status underkategori',
            name: 'På Verksted',
          },
          {
            description: 'UAD status underkategori',
            name: 'Mansnkapsmangel',
          },
        ],
      },
    },
  });

  const beredskap = await prisma.vesselStateCategory.upsert({
    where: { name: 'Beredskap' },
    update: {},
    create: {
      description: 'Status hovedkategori',
      name: 'Beredskap',
      states: {
        create: [
          {
            description: 'Beredskap status underkategori',
            name: '30 min. forsinket',
          },
          {
            description: 'Beredskap status underkategori',
            name: '60 min. forsinket',
          },
        ],
      },
    },
  });

  const historisk = await prisma.vesselStateCategory.upsert({
    where: { name: 'Historisk' },
    update: {},
    create: {
      description: 'Status hovedkategori',
      name: 'Historisk',
      states: {
        create: [
          {
            description: 'Historisk status underkategori',
            name: 'Solgt',
          },
          {
            description: 'Historisk status underkategori',
            name: 'Opplag/Annet',
          },
        ],
      },
    },
  });

  console.log({ operativ, uad, beredskap, historisk });

  const staffClass = await prisma.vesselClass.upsert({
    where: { name: 'Staff klassen' },
    update: {},
    create: {
      name: 'Staff klassen',
      range: 30,
      speed: 45,
    },
  });

  const ankerClass = await prisma.vesselClass.upsert({
    where: { name: 'Anker klassen' },
    update: {},
    create: {
      name: 'Anker klassen',
      range: 80,
      speed: 60,
    },
  });

  console.log({ staffClass, ankerClass });

  const capabilityDykker = await prisma.vesselCapability.upsert({
    where: { name: 'Dykker' },
    update: {},
    create: {
      name: 'Dykker',
      description: 'Dykker ombord',
    },
  });

  const capabilitySøk = await prisma.vesselCapability.upsert({
    where: { name: 'Søk' },
    update: {},
    create: {
      name: 'Søk',
      description: 'Søk med termisk kamera',
    },
  });

  const capabilityDrone = await prisma.vesselCapability.upsert({
    where: { name: 'Drone' },
    update: {},
    create: {
      name: 'Drone',
      description: 'Drone ombord',
    },
  });

  console.log({ capabilityDykker, capabilitySøk, capabilityDrone });

  const stationStavern = await prisma.station.upsert({
    where: { name: 'Stavern' },
    update: {},
    create: {
      name: 'Stavern',
    },
  });

  const stationHorten = await prisma.station.upsert({
    where: { name: 'Horten' },
    update: {},
    create: {
      name: 'Horten',
    },
  });

  console.log({ stationStavern, stationHorten });

  const vessel1 = await prisma.vessel.upsert({
    where: { name: 'RS Bernt Anker' },
    update: {},
    create: {
      rs: 180,
      name: 'RS Bernt Anker',
      classId: ankerClass.id,
      stationId: stationStavern.id,
      stateId: 1,
      capabilities: {
        connect: [{ id: capabilityDykker.id }, { id: capabilitySøk.id }],
      },
    },
  });

  const vessel2 = await prisma.vessel.upsert({
    where: { name: 'RS Elias' },
    update: {},
    create: {
      rs: 168,
      name: 'RS Elias',
      classId: staffClass.id,
      stationId: stationHorten.id,
      stateId: 2,
      capabilities: {
        connect: [{ id: capabilityDykker.id }, { id: capabilityDrone.id }],
      },
    },
  });

  const vessel3 = await prisma.vessel.upsert({
    where: { name: 'RS Hvaler' },
    update: {},
    create: {
      rs: 124,
      name: 'RS Hvaler',
      classId: staffClass.id,
      stationId: stationHorten.id,
      stateId: 3,
      capabilities: {
        connect: [{ id: capabilityDykker.id }],
      },
    },
  });

  console.log({ vessel1, vessel2, vessel3 });
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
