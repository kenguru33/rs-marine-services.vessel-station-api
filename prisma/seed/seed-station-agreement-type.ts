import { PrismaClient, StationAgreementType } from '@prisma/client';
const prisma = new PrismaClient();

const agreementsTypes = [
  {
    name: 'NOFO',
    description: 'Oljevernsavtale',
  },
  {
    name: 'Lostilbringertjeneste',
    description: 'Los avtale',
  },
  {
    name: 'Ambulanse',
    description: 'Ambulansestajsonsavtale',
  },
  {
    name: 'Akuttmedisinsk beredskap',
    description: 'Akuttmedisinsk beredskapsavtale',
  },
  {
    name: 'Kommunal beredskap',
    description: 'Kommunal beredskapsavtale',
  },
];

export const seedStationAgreementTypes = async function () {
  const models: Array<StationAgreementType> = [];

  for (const agreementType of agreementsTypes) {
    let model = await prisma.stationAgreementType.upsert({
      where: { name: agreementType.name },
      update: {},
      create: {
        name: agreementType.name,
        description: agreementType.description,
      },
    });
    models.push(model);
  }
  return models;
};
