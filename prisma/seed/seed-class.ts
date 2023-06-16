import { PrismaClient, VesselClass } from '@prisma/client';
const prisma = new PrismaClient();

const vesselClasses = [
  {
    name: 'Skomvær',
    description: 'Farøysklasse',
  },
  {
    name: 'Von Koss',
    description: 'Farøysklasse',
  },
  {
    name: 'Emmy Dyvi',
    description: 'Farøysklasse',
  },
  {
    name: 'Simrad',
    description: 'Farøysklasse',
  },
  {
    name: 'Fosen',
    description: 'Farøysklasse',
  },
  {
    name: 'Petter C. G. Sundt',
    description: 'Farøysklasse',
  },
  {
    name: 'Bergesen',
    description: 'Farøysklasse',
  },
  {
    name: 'Andre SRK fartøy',
    description: 'Farøysklasse',
  },
  {
    name: 'Ambulansebåt',
    description: 'Farøysklasse',
  },
  {
    name: 'Ulstein',
    description: 'Farøysklasse',
  },
  {
    name: 'Staff',
    description: 'Farøysklasse',
  },
  {
    name: 'Støttefartøy',
    description: 'Farøysklasse',
  },
  {
    name: 'Hovercraft',
    description: 'Farøysklasse',
  },
  {
    name: 'Pioner Multi',
    description: 'Farøysklasse',
  },
];
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
  return vesselClassModels;
};
