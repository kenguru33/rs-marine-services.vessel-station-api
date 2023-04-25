import { PrismaClient, VesselStateCategory } from '@prisma/client';
const prisma = new PrismaClient();

const stateCategories = [
  {
    name: 'Operativ',
    description: 'Status hovedkategori',
    states: [
      {
        name: 'Ledig på base',
        description: 'Operativ status underkategori',
      },
      {
        name: 'Ledig på patrulje',
        description: 'Operativ status underkategori',
      },
    ],
  },
  {
    name: 'UAD',
    description: 'Status hovedkategori',
    states: [
      {
        name: 'På Verksted',
        description: 'UAD status underkategori',
      },
      {
        name: 'Mansnkapsmangel',
        description: 'UAD status underkategori',
      },
    ],
  },
  {
    name: 'Redusert',
    description: 'Status hovedkategori',
    states: [
      {
        name: '30 min. beredskap',
        description: 'Redusert status underkategori',
      },
      {
        name: '60 min. beredskap',
        description: 'Redusert status underkategori',
      },
    ],
  },
  {
    name: 'Historisk',
    description: 'Status hovedkategori',
    states: [
      {
        name: 'Solgt',
        description: 'Historisk status underkategori',
      },
      {
        name: 'Opplag/utgått',
        description: 'Historisk status underkategori',
      },
    ],
  },
];

export const seedStateCategories = async function () {
  const stateCategoryModels: Array<VesselStateCategory> = [];

  for (const stateCategory of stateCategories) {
    let stateCategoryModel = await prisma.vesselStateCategory.upsert({
      where: { name: stateCategory.name },
      update: {},
      create: {
        description: 'Status hovedkategori',
        name: stateCategory.name,
        states: {
          create: stateCategory.states,
        },
      },
    });
    stateCategoryModels.push(stateCategoryModel);
  }
  return stateCategoryModels;
};
