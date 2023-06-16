import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const emailExists = async function (email: string) {
  const model = await prisma.vesselCrew.findUnique({
    where: { email },
  });
  return model;
};

const phoneExists = async function (phone: string) {
  const model = await prisma.vesselCrew.findUnique({
    where: { phone },
  });
  return model;
};

const getRandomUniqueCrew = function () {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  let email = `${firstName}.${lastName}@rs.no`;
  while (emailExists(`${firstName}.${lastName}@rs.no`)) {
    email = `${firstName}.${lastName}${faker.number.int()}@rs.no`;
  }
  let phone = faker.phone.number();
  while (phoneExists(phone)) {
    phone = faker.phone.number();
  }
  return {
    name: `${firstName} ${lastName}`,
    title: faker.name.jobTitle(),
    email,
    phone,
  };
};

const crew = [
  {
    ...getRandomUniqueCrew(),
    title: 'Kaptein',
  },
  {
    ...getRandomUniqueCrew(),
    title: 'Maskinist',
  },
  {
    ...getRandomUniqueCrew(),
    title: 'Matros',
  },
];

export const seedVesselCrew = async function () {
  const vesselCrews = [];
  const vessels = await prisma.vessel.findMany();

  let model;
  for (const vessel of vessels) {
    for (const crewMember of crew) {
      model = await prisma.vesselCrew.create({
        data: {
          name: crewMember.name,
          title: crewMember.title,
          email: crewMember.email,
          phone: crewMember.phone,
          vessel: {
            connect: {
              id: vessel.id,
            },
          },
        },
      });
      vesselCrews.push(model);
    }
  }
  return vesselCrews;
};
