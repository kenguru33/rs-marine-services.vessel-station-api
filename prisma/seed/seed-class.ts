import { PrismaClient, VesselClass } from '@prisma/client';
const prisma = new PrismaClient();

const vesselClasses = [
  {
    name: 'Skomvær',
    range: 417,
    speed: 25,
  },
  {
    name: 'Von Koss',
    range: 800,
    speed: 24
  },
  {
    name: 'Emmy Dyvi',
    range: 600,
    speed: 24
  },
  {
      name: 'Simrad',
      range: 200,
      speed: 30
  },
  {
      name: 'Fosen',
      range: 600,
      speed: 29,
  },
  {
      name: 'Petter C. G. Sundt',
      range: 350,
      speed: 39,
  },
  {
      name: 'Bergesen',
      range: 200,
      speed: 38,
  },
  {
      name: 'Andre SRK fartøy',
      range: 0,
      speed: 45
  },
  {
      name: 'Ambulansebåt',
      range: 300,
      speed: 40
  },
  {
      name: 'Ulstein',
      range: 400,
      speed: 38
  },
  {
    name: 'Staff',
    range: 0,
    speed: 42,
  },
  {
    name: 'Støttefartøy',
    range: 150,
    speed: 35,
  },
  {
    name: 'Hovercraft',
    range: 0,
    speed: 35,
  },
  {
    name: 'Pioner Multi',
    range: 0,
    speed: 0,
  },
]
export const seedVesselClasses = async function () {
  const vesselClassModels: Array<VesselClass> = [];

  for (const vesselClass of vesselClasses) {
    let vesselClassModel = await prisma.vesselClass.upsert({
      where: { name: vesselClass.name },
      update: {},
      create: {
        name: vesselClass.name,
      },
    });
    vesselClassModels.push(vesselClassModel);
  }
  return vesselClassModels
};
