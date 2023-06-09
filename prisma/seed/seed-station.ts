import { PrismaClient, Station } from '@prisma/client';
const prisma = new PrismaClient();

const stations = [
  {
    name: 'Alta',
    type: 'RSRK',
    address: 'co Geir Aslaksen, øvreveien 12',
    zipcode: '9515',
    ziplocation: 'Alta',
    latitude: '69.9799340',
    longitude: '23.3056020',
    postalPostbox: '',
  },
  {
    name: 'Arendal',
    type: 'FAST',
    address: 'Kystveien 118',
    zipcode: '4842',
    ziplocation: 'Arendal',
    latitude: '58.4661540',
    longitude: '8.7926980',
    postalPostbox: '',
  },
  {
    name: 'Ballstad',
    type: 'FAST',
    address: 'Almenningskai',
    zipcode: '8373',
    ziplocation: 'Ballstad',
    latitude: '68.0709100',
    longitude: '13.5384100',
    postalPostbox: 'Post i butikk',
  },
  {
    name: 'Bergen',
    type: 'FAST',
    address: 'Strandgaten 199',
    zipcode: '5004',
    ziplocation: 'Bergen',
    latitude: '60.3993500',
    longitude: '5.3122170',
    postalPostbox: '',
  },
  {
    name: 'Brønnøysund',
    type: 'RSRK',
    address: 'v/ Kirsten-Marie Klaussen Aune, Naustholmen 16',
    zipcode: '8907',
    ziplocation: 'Brønnøysund',
    latitude: '65.4735610',
    longitude: '12.2082770',
    postalPostbox: '',
  },
  {
    name: 'Båtsfjord',
    type: 'FAST',
    address: 'Strandv. 7 B, Redningsskøytekai, Industrikai',
    zipcode: '9991',
    ziplocation: 'Båtsfjord',
    latitude: '70.6342880',
    longitude: '29.7251650',
    postalPostbox: 'Pb 363',
  },
  {
    name: 'Egersund',
    type: 'FAST',
    address: 'Torget 1A',
    zipcode: '4370',
    ziplocation: 'Egersund',
    latitude: '58.4522880',
    longitude: '5.9993780',
    postalPostbox: '',
  },
  {
    name: 'Femunden',
    type: 'RSRK',
    address: 'Sollihagaen 6',
    zipcode: '7374',
    ziplocation: 'Røros',
    latitude: '62.3864610',
    longitude: '11.9510740',
    postalPostbox: 'Pb 88',
  },
  {
    name: 'Florø',
    type: 'FAST',
    address: 'Hamnegata 9',
    zipcode: '6900',
    ziplocation: 'Florø',
    latitude: '61.6006950',
    longitude: '5.0228100',
    postalPostbox: '',
  },
  {
    name: 'Fosnavåg',
    type: 'FAST',
    address: 'Gerhard Voldnes vei 11',
    zipcode: '6090',
    ziplocation: 'Fosnavåg',
    latitude: '62.3427100',
    longitude: '5.6346840',
    postalPostbox: '',
  },
  {
    name: 'Mjøsa',
    type: 'RSRK',
    address: '',
    zipcode: '2821',
    ziplocation: 'Gjøvik',
    latitude: '60.7781410',
    longitude: '10.7032640',
    postalPostbox: '',
  },
  {
    name: 'Mongstad',
    type: 'RSRK',
    address: '',
    zipcode: '5954',
    ziplocation: 'Mongstad',
    latitude: '60.7923520',
    longitude: '5.2932430',
    postalPostbox: '',
  },
  {
    name: 'Hardbakke',
    type: '-1',
    address: 'c/o Jarle Haugsvær, austfjordvegen 1988',
    zipcode: '5981',
    ziplocation: 'Masfjordnes',
    latitude: '61.0717820',
    longitude: '4.8375220',
    postalPostbox: '',
  },
  {
    name: 'Harstad',
    type: 'RSRK',
    address: 'c/o Tore Henriksen, Uranusveien 8',
    zipcode: '9408',
    ziplocation: 'Harstad',
    latitude: '68.7864350',
    longitude: '16.5436820',
    postalPostbox: '',
  },
  {
    name: 'Haugesund',
    type: 'FAST',
    address: 'Møllerveien 6',
    zipcode: '5525',
    ziplocation: 'Haugesund',
    latitude: '59.4145960',
    longitude: '5.2642160',
    postalPostbox: 'Postboks 629',
  },
  {
    name: 'Havøysund',
    type: 'FAST',
    address: 'Strandgata',
    zipcode: '9690',
    ziplocation: 'Havøysund',
    latitude: '70.9946850',
    longitude: '24.6519580',
    postalPostbox: 'Postboks 115',
  },
  {
    name: 'Fillan',
    type: 'FAST',
    address: '',
    zipcode: '7240',
    ziplocation: 'Hitra',
    latitude: '63.6086300',
    longitude: '8.9800860',
    postalPostbox: '',
  },
  {
    name: 'Hjellestad (Nedlagt)',
    type: '-1',
    address: 'Hjellestadveien 247',
    zipcode: '5259',
    ziplocation: 'Hjellestad',
    latitude: '60.2564850',
    longitude: '5.2417310',
    postalPostbox: '',
  },
  {
    name: 'Kleppestø (Nedlagt)',
    type: '-1',
    address: 'Kleppestø kai 9',
    zipcode: '5322',
    ziplocation: 'Kleppestø',
    latitude: '60.4071000',
    longitude: '5.2254310',
    postalPostbox: '',
  },
  {
    name: 'Kragerø',
    type: 'RSRK',
    address: 'Kragerø',
    zipcode: '3770',
    ziplocation: 'Kragerø',
    latitude: '58.8689780',
    longitude: '9.4152470',
    postalPostbox: '',
  },
  {
    name: 'Mandal',
    type: 'RSRK',
    address: 'c/o Rune Braadland, Holteveien 81',
    zipcode: '4517',
    ziplocation: 'Mandal',
    latitude: '58.0201770',
    longitude: '7.4769430',
    postalPostbox: '',
  },
  {
    name: 'Moss',
    type: 'RSRK',
    address: '',
    zipcode: '1531',
    ziplocation: 'Moss',
    latitude: '59.4335560',
    longitude: '10.6528450',
    postalPostbox: '',
  },
  {
    name: 'Myre',
    type: 'FAST',
    address: 'Storgata. 1',
    zipcode: '8430',
    ziplocation: 'Myre',
    latitude: '68.9137760',
    longitude: '15.0683860',
    postalPostbox: '',
  },
  {
    name: 'Måløy',
    type: 'RSRK',
    address: '',
    zipcode: '6701',
    ziplocation: 'Måløy',
    latitude: '61.9372240',
    longitude: '5.1173790',
    postalPostbox: 'Postboks 127',
  },
  {
    name: 'Oscarsborg',
    type: 'FAST',
    address: 'c/o Sætre Marina, Øraveien 14',
    zipcode: '3475',
    ziplocation: 'Sætre',
    latitude: '59.6746310',
    longitude: '10.6045220',
    postalPostbox: '',
  },
  {
    name: 'Aukra',
    type: 'RSRK',
    address: '',
    zipcode: '6480',
    ziplocation: 'Aukra',
    latitude: '62.8126130',
    longitude: '6.9082840',
    postalPostbox: 'Postboks 9',
  },
  {
    name: 'Røst',
    type: 'FAST',
    address: '',
    zipcode: '8064',
    ziplocation: 'Røst',
    latitude: '67.5078550',
    longitude: '12.0737120',
    postalPostbox: '',
  },
  {
    name: 'Skjervøy',
    type: 'FAST',
    address: 'Industriveien 12',
    zipcode: '9180',
    ziplocation: 'Skjervøy',
    latitude: '70.0298360',
    longitude: '20.9754210',
    postalPostbox: '',
  },
  {
    name: 'Skjærhalden',
    type: 'FAST',
    address: '',
    zipcode: '1680',
    ziplocation: 'Skjærhalden',
    latitude: '59.0228730',
    longitude: '11.0357600',
    postalPostbox: 'Pb 17',
  },
  {
    name: 'Stavanger',
    type: 'RSRK',
    address: 'Ryfylkekaien 3',
    zipcode: '4006',
    ziplocation: 'Stavanger',
    latitude: '58.9743500',
    longitude: '5.7327200',
    postalPostbox: '',
  },
  {
    name: 'Stavern',
    type: 'FAST',
    address: 'Bryggeveien 1',
    zipcode: '3291',
    ziplocation: 'Stavern',
    latitude: '58.9992060',
    longitude: '10.0413810',
    postalPostbox: 'Postboks 87',
  },
  {
    name: 'Stord',
    type: 'RSRK',
    address: '',
    zipcode: '5411',
    ziplocation: 'Stord',
    latitude: '59.7590260',
    longitude: '5.4820990',
    postalPostbox: '',
  },
  {
    name: 'Svolvær',
    type: 'FAST',
    address: 'Parkgata 12',
    zipcode: '8300',
    ziplocation: 'Svolvær',
    latitude: '68.2343090',
    longitude: '14.5700750',
    postalPostbox: '',
  },
  {
    name: 'Sørvær',
    type: 'FAST',
    address: '',
    zipcode: '9595',
    ziplocation: 'Sørvær',
    latitude: '70.6308500',
    longitude: '21.9798000',
    postalPostbox: 'Postboks 4',
  },
  {
    name: 'Tromsø',
    type: 'RSRK',
    address: '',
    zipcode: '9258',
    ziplocation: 'Tromsø',
    latitude: '69.6517140',
    longitude: '18.9620230',
    postalPostbox: 'Postboks 824',
  },
  {
    name: 'Trondheim',
    type: 'RSRK',
    address: 'Nedre Ila 6b',
    zipcode: '7018',
    ziplocation: 'Trondheim',
    latitude: '63.4317850',
    longitude: '10.3752940',
    postalPostbox: '9173',
  },
  {
    name: 'Træna',
    type: '-1',
    address: '',
    zipcode: '8770',
    ziplocation: 'Træna',
    latitude: '66.5021000',
    longitude: '12.1024970',
    postalPostbox: 'Postboks 179',
  },
  {
    name: 'Tønsberg',
    type: 'RSRK',
    address: 'Jarlsøveien 47',
    zipcode: '3124',
    ziplocation: 'Tønsberg',
    latitude: '59.2446930',
    longitude: '10.4706940',
    postalPostbox: '',
  },
  {
    name: 'Vardø',
    type: 'FAST',
    address: 'Vestre moloarm',
    zipcode: '9950',
    ziplocation: 'Vardø',
    latitude: '70.3747520',
    longitude: '31.1035270',
    postalPostbox: 'Pb 87',
  },
  {
    name: 'Ålesund',
    type: 'RSRK',
    address: 'Ålesund',
    zipcode: '6004',
    ziplocation: 'Ålesund',
    latitude: '62.4721700',
    longitude: '6.1536840',
    postalPostbox: '',
  },
  {
    name: 'Hammerfest',
    type: '-1',
    address: '',
    zipcode: '9603',
    ziplocation: 'Hammerfest',
    latitude: '70.6639520',
    longitude: '23.6868900',
    postalPostbox: '',
  },
  {
    name: 'Helgeland',
    type: 'FAST',
    address: 'Træna',
    zipcode: '8770',
    ziplocation: 'Træna',
    latitude: '66.5021000',
    longitude: '12.1024970',
    postalPostbox: '',
  },
  {
    name: 'Horten',
    type: 'RSRK',
    address: 'Langgrunnveien 34',
    zipcode: '3186',
    ziplocation: 'Horten',
    latitude: '59.3917570',
    longitude: '10.4808710',
    postalPostbox: '',
  },
  {
    name: 'Namsos',
    type: 'RSRK',
    address: 'Verftsgata 38',
    zipcode: '7800',
    ziplocation: 'Namsos',
    latitude: '64.4662020',
    longitude: '11.4915690',
    postalPostbox: '',
  },
  {
    name: 'Oslo',
    type: 'RSRK',
    address: 'Drammensveien 288',
    zipcode: '1325',
    ziplocation: 'Lysaker',
    latitude: '59.9126060',
    longitude: '10.6414390',
    postalPostbox: '',
  },
  {
    name: 'Andenes',
    type: 'FAST',
    address: 'Hamnegt. 51',
    zipcode: '8480',
    ziplocation: 'Andenes',
    latitude: '69.3238080',
    longitude: '16.1338970',
    postalPostbox: '',
  },
  {
    name: 'Skjeberg',
    type: 'RSRK',
    address: 'Skjeberg',
    zipcode: '1747',
    ziplocation: 'Skjeberg',
    latitude: '59.1734660',
    longitude: '11.1550000',
    postalPostbox: '',
  },
  {
    name: 'Bakarvågen (Nedlagt)',
    type: '-1',
    address: 'Bakarvågen 22',
    zipcode: '5305',
    ziplocation: 'Florvåg',
    latitude: '60.4256660',
    longitude: '5.2361330',
    postalPostbox: '',
  },
  {
    name: 'Mehamn',
    type: 'FAST',
    address: '',
    zipcode: '9770',
    ziplocation: 'Mehamn',
    latitude: '71.0357000',
    longitude: '27.8489000',
    postalPostbox: '',
  },
  {
    name: 'Lillesand',
    type: 'RSRK',
    address: '',
    zipcode: '4790',
    ziplocation: 'Lillesand',
    latitude: '58.2467440',
    longitude: '8.3839960',
    postalPostbox: '',
  },
  {
    name: 'Bjørn',
    type: 'AMB',
    address: 'Øysundveien',
    zipcode: '8820',
    ziplocation: 'Dønna',
    latitude: '66.0814620',
    longitude: '12.5899030',
    postalPostbox: '',
  },
  {
    name: 'Rødøy',
    type: 'AMB',
    address: '',
    zipcode: '8193',
    ziplocation: 'Rødøy',
    latitude: '66.6564500',
    longitude: '13.0772170',
    postalPostbox: '',
  },
  {
    name: 'Ørnes',
    type: 'AMB',
    address: 'Ambulansestasjon, Kystveien 2',
    zipcode: '8150',
    ziplocation: 'Ørnes',
    latitude: '66.8673300',
    longitude: '13.7082200',
    postalPostbox: '',
  },
  {
    name: 'Vega',
    type: 'AMB',
    address: '',
    zipcode: '8980',
    ziplocation: 'Vega',
    latitude: '65.6551170',
    longitude: '12.0159750',
    postalPostbox: '',
  },
  {
    name: 'Levanger',
    type: 'RSRK',
    address: '',
    zipcode: '7600',
    ziplocation: 'Levanger',
    latitude: '63.7474500',
    longitude: '11.2972280',
    postalPostbox: '',
  },
  {
    name: 'Leikanger',
    type: 'RSRK',
    address: 'Båthavna',
    zipcode: '6863',
    ziplocation: 'Leikanger',
    latitude: '61.0000000',
    longitude: '6.8000000',
    postalPostbox: '',
  },
  {
    name: 'Grimstadneset',
    type: 'RSRK',
    address: 'Grimstadvegen 93',
    zipcode: '5252',
    ziplocation: 'Søreidgrend',
    latitude: '60.3165800',
    longitude: '5.2563000',
    postalPostbox: '',
  },
  {
    name: 'Maritimt Mobilt Innsatskonsept',
    type: 'RSRK',
    address: 'Horten',
    zipcode: '3186',
    ziplocation: 'Horten',
    latitude: '59.3919620',
    longitude: '10.4762790',
    postalPostbox: '',
  },
  {
    name: 'Aukra (gml)',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '62.8126130',
    longitude: '6.9082840',
    postalPostbox: '',
  },
  {
    name: 'Bodø',
    type: 'FAST',
    address: 'Moloveien 13',
    zipcode: '8003',
    ziplocation: 'BODØ',
    latitude: '67.2821950',
    longitude: '14.3723130',
    postalPostbox: '',
  },
  {
    name: 'Berlevåg',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '70.8577800',
    longitude: '29.0863600',
    postalPostbox: '',
  },
  {
    name: 'Brekstad (Nedlagt)',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '63.6869700',
    longitude: '9.6654100',
    postalPostbox: '',
  },
  {
    name: 'Byrknesøy',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '60.8948400',
    longitude: '4.8715350',
    postalPostbox: '',
  },
  {
    name: 'Drøbak (Nedlagt)',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '59.6746310',
    longitude: '10.6045220',
    postalPostbox: '',
  },
  {
    name: 'Edøy (Nedlagt)',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '63.3004990',
    longitude: '8.1465340',
    postalPostbox: '',
  },
  {
    name: 'Farsund',
    type: 'FAST',
    address: 'Farøy',
    zipcode: '4551',
    ziplocation: '',
    latitude: '58.0949130',
    longitude: '6.8078330',
    postalPostbox: 'Postboks 62',
  },
  {
    name: 'Honningsvåg',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '70.9820900',
    longitude: '25.9703700',
    postalPostbox: '',
  },
  {
    name: 'Husøy',
    type: 'FAST',
    address: '',
    zipcode: '9389',
    ziplocation: 'Husøy',
    latitude: '69.5447020',
    longitude: '17.6706010',
    postalPostbox: '',
  },
  {
    name: 'Kristiansand',
    type: 'RSRK',
    address: 'Marviksveien 120, Bygning 25',
    zipcode: '4631',
    ziplocation: 'Kristiansand',
    latitude: '58.1498600',
    longitude: '8.0336280',
    postalPostbox: '',
  },
  {
    name: 'Kristiansund',
    type: 'FAST',
    address: 'Freiveien 52B',
    zipcode: '6512',
    ziplocation: 'KRISTIANSUND',
    latitude: '63.1163930',
    longitude: '7.7340020',
    postalPostbox: '',
  },
  {
    name: 'Lysaker',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '59.9131600',
    longitude: '10.6406350',
    postalPostbox: '',
  },
  {
    name: 'Risør',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '58.7205700',
    longitude: '9.2342200',
    postalPostbox: '',
  },
  {
    name: 'Rørvik',
    type: 'FAST',
    address: 'Havnegata 5',
    zipcode: '7900',
    ziplocation: 'RØRVIK',
    latitude: '64.8602490',
    longitude: '11.2299220',
    postalPostbox: 'Havnegata 5',
  },
  {
    name: 'Sandnessjøen',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '66.0216600',
    longitude: '12.6315800',
    postalPostbox: '',
  },
  {
    name: 'Senjahopen',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '69.4968600',
    longitude: '17.4897900',
    postalPostbox: '',
  },
  {
    name: 'Vannsøy',
    type: '-1',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '64.8448880',
    longitude: '10.6280000',
    postalPostbox: '',
  },
  {
    name: 'Ikke på stasjon',
    type: 'FAST',
    address: '',
    zipcode: '',
    ziplocation: '',
    latitude: '0.1000000',
    longitude: '0.1000000',
    postalPostbox: '',
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
        address: station.address,
        postalLocation: station.ziplocation,
        postalCode: station.zipcode,
        latitude: parseFloat(station.latitude),
        longitude: parseFloat(station.longitude),
        typeId: 1,
        postalDelivery: 'Post leveres på kaien eller i Rema 1000 like ved',
      },
    });
    stationModels.push(stationModel);
  }
  return stationModels;
};
