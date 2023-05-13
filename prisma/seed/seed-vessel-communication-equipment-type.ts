import { PrismaClient, VesselCommunicationEquipmentType } from '@prisma/client';
const prisma = new PrismaClient();

const communicationEquipmentTypes = [
  {
    name: 'Nødnett',
    description: 'Nødnett',
  },

  {
    name: 'VHF',
    description: 'Radiokommunikasjon',
  },
  {
    name: 'MF',
    description: 'Mellomfrekvens',
  },
  {
    name: 'Telefon',
    description: 'Mobiltelefon',
  },
];

export const seedCommunicationEquipmentTypes = async function () {
  const models: Array<VesselCommunicationEquipmentType> = [];

  for (const type of communicationEquipmentTypes) {
    let model = await prisma.vesselCommunicationEquipmentType.upsert({
      where: { name: type.name },
      update: {},
      create: {
        name: type.name,
        description: type.description,
      },
    });
    models.push(model);
  }
  return models;
};
