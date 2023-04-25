import { PrismaClient, Station } from '@prisma/client';
const prisma = new PrismaClient();

const stations = [
  {
    name: 'Alta',
  },
  {
    name: 'Arendal',
  },
  {
    name: 'Ballstad',
  },
  {
    name: 'Bergen',
  },
  {
    name: 'Brønnøysund',
  },
  {
    name: 'Båtsfjord',
  },
  {
    name: 'Egersund',
  },
  {
    name: 'Femunden',
  },
  {
    name: 'Florø',
  },
  {
    name: 'Fosnavåg',
  },
  {
    name: 'Mjøsa',
  },
  {
    name: 'Mongstad',
  },
  {
    name: 'Hardbakke',
  },
  {
    name: 'Harstad',
  },
  {
    name: 'Haugesund',
  },
  {
    name: 'Havøysund',
  },
  {
    name: 'Fillan',
  },
  {
    name: 'Kragerø',
  },
  {
    name: 'Mandal',
  },
  {
    name: 'Moss',
  },
  {
    name: 'Myre',
  },
  {
    name: 'Måløy',
  },
  {
    name: 'Oscarsborg',
  },
  {
    name: 'Aukra',
  },
  {
    name: 'Røst',
  },
  {
    name: 'Skjervøy',
  },
  {
    name: 'Skjærhalden',
  },
  {
    name: 'Stavanger',
  },
  {
    name: 'Stavern',
  },
  {
    name: 'Stord',
  },
  {
    name: 'Svolvær',
  },
  {
    name: 'Sørvær',
  },
  {
    name: 'Tromsø',
  },
  {
    name: 'Trondheim',
  },
  {
    name: 'Træna',
  },
  {
    name: 'Tønsberg',
  },
  {
    name: 'Vardø',
  },
  {
    name: 'Ålesund',
  },
  {
    name: 'Hammerfest',
  },
  {
    name: 'Helgeland',
  },
  {
    name: 'Horten',
  },
  {
    name: 'Namsos',
  },
  {
    name: 'Oslo',
  },
  {
    name: 'Andenes',
  },
  {
    name: 'Skjeberg',
  },
  {
    name: 'Mehamn',
  },
  {
    name: 'Lillesand',
  },
  {
    name: 'Bjørn',
  },
  {
    name: 'Rødøy',
  },
  {
    name: 'Ørnes',
  },
  {
    name: 'Vega',
  },
  {
    name: 'Levanger',
  },
  {
    name: 'Leikanger',
  },
  {
    name: 'Grimstadneset',
  },
  {
    name: 'Maritimt Mobilt Innsatskonsept',
  },
  {
    name: 'Aukra (gml)',
  },
  {
    name: 'Bodø',
  },
  {
    name: 'Berlevåg',
  },
  {
    name: 'Byrknesøy',
  },
  {
    name: 'Farsund',
  },
  {
    name: 'Honningsvåg',
  },
  {
    name: 'Husøy',
  },
  {
    name: 'Kristiansand',
  },
  {
    name: 'Kristiansund',
  },
  {
    name: 'Lysaker',
  },
  {
    name: 'Risør',
  },
  {
    name: 'Rørvik',
  },
  {
    name: 'Sandnessjøen',
  },
  {
    name: 'Senjahopen',
  },
  {
    name: 'Vannsøy',
  },
];

export const seedStations = async () => {
  const stationModels: Array<Station> = [];
  for (const station of stations) {
    let stationModel = await prisma.station.upsert({
      where: { name: station.name },
      update: {},
      create: {
        name: station.name,
      },
    });
    stationModels.push(stationModel);
  }
  return stationModels;
};
