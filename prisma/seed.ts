import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const operativ = await prisma.vesselState.upsert({
    where: { name: 'Operativ' },
    update: {},
    create: {
      description: 'Status hovedkategori',
      name: 'Operativ',
      subStates: {
        create: [
          {
            description: 'Operativ status underkategori',
            name: 'Ledig på base',
          },
          {
            description: 'Operativ status underkategori',
            name: 'Ledig på patrulje',
          },
        ],
      },
    },
  });

  const operativSubStates = await prisma.vesselSubState.findMany({
    where: { parentState: { id: operativ.id } },
  });

  const uad = await prisma.vesselState.upsert({
    where: { name: 'UAD' },
    update: {},
    create: {
      description: 'Status hovedkategori',
      name: 'UAD',
      subStates: {
        create: [
          {
            description: 'UAD status underkategori',
            name: 'Verksted',
          },
          {
            description: 'UAD status underkategori',
            name: 'Mannskap',
          },
        ],
      },
    },
  });

  const uadSubStates = await prisma.vesselSubState.findMany({
    where: { parentState: { id: uad.id } },
  });

  const beredskap = await prisma.vesselState.upsert({
    where: { name: 'Beredskap' },
    update: {},
    create: {
      description: 'Status hovedkategori',
      name: 'Beredskap',
      subStates: {
        create: [
          {
            description: 'Beredskap status underkategori',
            name: '30 min. forberedelsestid',
          },
          {
            description: 'Beredskap status underkategori',
            name: '60 min. forberedelsestid',
          },
        ],
      },
    },
  });

  const beredskaoSubStates = await prisma.vesselSubState.findMany({
    where: { parentState: { id: beredskap.id } },
  });

  const historisk = await prisma.vesselState.upsert({
    where: { name: 'Historisk' },
    update: {},
    create: {
      description: 'Status hovedkategori',
      name: 'Historisk',
      subStates: {
        create: [
          {
            description: 'Historisk status underkategori',
            name: 'Solg',
          },
          {
            description: 'Status underkategori',
            name: 'Makulert/utgått',
          },
        ],
      },
    },
  });

  const historiskSubStates = await prisma.vesselSubState.findMany({
    where: { parentState: { id: historisk.id } },
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
      subStateId: operativSubStates[0].id,
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
      subStateId: uadSubStates[0].id,
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
      subStateId: beredskaoSubStates[1].id,
      capabilities: {
        connect: [{ id: capabilityDykker.id }],
      },
    },
  });

  console.log({ vessel1, vessel2 });
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
