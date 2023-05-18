import {
  Prisma,
  PrismaClient,
  StationAgreementCustomer,
  StationAgreementType,
} from '@prisma/client';

import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const agreementsCustomers = [
  {
    name: 'Kystverket',
    description: 'Kystverket',
  },
  {
    name: 'Forsvaret',
    description: 'Forsvaret',
  },
  {
    name: 'Hovedredningssentralen',
    description: 'Hovedredningssentralen',
  },
  {
    name: 'Norsk Polarinstitutt',
    description: 'Norsk Polarinstitutt',
  },
];

type CustomerWithContact = Prisma.StationAgreementCustomerGetPayload<{
  include: { contacts: true };
}>;

export const seedStationAgreementCustomer = async function () {
  const models: Array<CustomerWithContact> = [];

  for (const agreementCustomer of agreementsCustomers) {
    let model = (await prisma.stationAgreementCustomer.upsert({
      where: { name: agreementCustomer.name },
      update: {},
      create: {
        name: agreementCustomer.name,
        description: agreementCustomer.description,
        contacts: {
          create: [
            {
              email: faker.internet.email(),
              phone: faker.phone.number('+47 ### ## ###'),
            },
          ],
        },
      },
    })) as CustomerWithContact;
    models.push(model);
  }
  return models;
};
