import {
  PrismaClient,
  Station,
  Vessel,
  VesselCapability,
  VesselClass,
} from '@prisma/client';
const prisma = new PrismaClient();

const vessels = [
  {
    name: 'RS 103 "Dagfinn Paust"',
    rs: '103',
  },
  {
    name: 'RS 107 "Knut Hoem"',
    rs: '107',
  },
  {
    name: 'RS 108 "Kaptein Buhre"',
    rs: '108',
  },
  {
    name: 'RS 110 "Reidar von Koss"',
    rs: '110',
  },
  {
    name: 'RS 111 "Peter Henry von Koss"',
    rs: '111',
  },
  {
    name: 'RS 113 "Erik Bye"',
    rs: '113',
  },
  {
    name: 'RS 114 "Bergen Kreds"',
    rs: '114',
  },
  {
    name: 'RS 120 "Sundt "',
    rs: '120',
  },
  {
    name: 'RS 122 "Simrad Færder"',
    rs: '122',
  },
  {
    name: 'RS 125 "Det Norske Veritas"',
    rs: '125',
  },
  {
    name: 'RS 126 "Harald V"',
    rs: '126',
  },
  {
    name: 'RS 127 "Ryfylke"',
    rs: '127',
  },
  {
    name: 'RS 128 "Gideon"',
    rs: '128',
  },
  {
    name: 'RS 129 "Une Amundsen"',
    rs: '129',
  },
  {
    name: 'RS 130 "Utvær"',
    rs: '130',
  },
  {
    name: 'RS 131 "Uni"',
    rs: '131',
  },
  {
    name: 'RS 132 "Gjert Wilhelmsen"',
    rs: '132',
  },
  {
    name: 'RS 136 "Halfdan Grieg"',
    rs: '136',
  },
  {
    name: 'RS 137 "Kristian Gerhard Jebsen"',
    rs: '137',
  },
  {
    name: 'RS 138 "Sundt Flyer"',
    rs: '138',
  },
  {
    name: 'RS 139 "Uni Oslofjord"',
    rs: '139',
  },
  {
    name: 'RS 140 "Bjarne Kyrkjebø"',
    rs: '140',
  },
  {
    name: 'RS 142 "Horn Flyer"',
    rs: '142',
  },
  {
    name: 'RS 143 "Uni Kragerø"',
    rs: '143',
  },
  {
    name: 'RS 144 "Uni Helgeland"',
    rs: '144',
  },
  {
    name: 'RS 145 "Vekteren"',
    rs: '145',
  },
  {
    name: 'RS 146 "Stormbull"',
    rs: '146',
  },
  {
    name: 'RS 147 "Inge Steensland"',
    rs: '147',
  },
  {
    name: 'RS 148 "Mjøsvekteren"',
    rs: '148',
  },
  {
    name: 'RS 149 "Uni Røros"',
    rs: '149',
  },
  {
    name: 'RS 150 "Odin"',
    rs: '150',
  },
  {
    name: 'RS 151 "Sjømann"',
    rs: '151',
  },
  {
    name: 'RS 152 "Bergesen d.y"',
    rs: '152',
  },
  {
    name: 'RS 154 "Det Norske Veritas II"',
    rs: '154',
  },
  {
    name: 'RS 155 "Bendt R. Rasmussen"',
    rs: '155',
  },
  {
    name: 'RS 156 "Eivind Eckbo"',
    rs: '156',
  },
  {
    name: 'RS 157 "Bill"',
    rs: '157',
  },
  {
    name: 'RS 420 "Eyr Ytterholmen"',
    rs: '420',
  },
  {
    name: 'RS 421 "Eyr Bremstein"',
    rs: '421',
  },
  {
    name: 'RS 422 "Eyr Myken"',
    rs: '422',
  },
  {
    name: 'RS 423 "Eyr Åsvær"',
    rs: '423',
  },
  {
    name: 'RS 134 "Uni Femunden"',
    rs: '134',
  },
  {
    name: 'RS 135 "Kaptein E. Nygård"',
    rs: '135',
  },
  {
    name: 'RS 141 "Mærsk"',
    rs: '141',
  },
  {
    name: 'RS 123 "Simrad Buholmen SRK"',
    rs: '123',
  },
  {
    name: 'RS 159 "Elias"',
    rs: '159',
  },
  {
    name: 'RS 160 "Horn Rescue"',
    rs: '160',
  },
  {
    name: 'RS 158 "Idar Ulstein"',
    rs: '158',
  },
  {
    name: 'RS 162 "Klaveness Marine"',
    rs: '162',
  },
  {
    name: 'RS 161 "Einar Staff Sr."',
    rs: '161',
  },
  {
    name: 'RS 163 "Kristian Gerhard Jebsen II"',
    rs: '163',
  },
  {
    name: 'RS 164 "Jens Bye"',
    rs: '164',
  },
  {
    name: 'RS 165 "Askeladden"',
    rs: '165',
  },
  {
    name: 'RS 166 "Horn Stayer"',
    rs: '166',
  },
  {
    name: 'RS 168 "Hans Herman Horn"',
    rs: '168',
  },
  {
    name: 'RS 167 "UNI Sognefjord"',
    rs: '167',
  },
  {
    name: 'RS 169 "Odd Fellow III"',
    rs: '169',
  },
  {
    name: 'RS 801 "Norsk Tipping I"',
    rs: '801',
  },
  {
    name: 'RS 170 "Prinsesse Ragnhild"',
    rs: '170',
  },
  {
    name: 'RS 802 "Norsk Tipping II"',
    rs: '802',
  },
  {
    name: 'RS 803 "Folke Patriksson I"',
    rs: '803',
  },
  {
    name: 'RS 171 "Ivar Formo"',
    rs: '171',
  },
  {
    name: 'RS 804 "Folke Patriksson II"',
    rs: '804',
  },
  {
    name: 'RS 805 "Dora Elsebeth"',
    rs: '805',
  },
  {
    name: 'RS 806 "UNI Torungen"',
    rs: '806',
  },
  {
    name: 'RS 901 "Isvekteren"',
    rs: '901',
  },
  {
    name: 'RS 172 "Ragnar Stoud Platou"',
    rs: '172',
  },
  {
    name: 'RS 807 "UNI Oksøy"',
    rs: '807',
  },
  {
    name: 'RS 902 "Klaveness stiftelsen"',
    rs: '902',
  },
  {
    name: 'RS 808 "Sjøvekteren"',
    rs: '808',
  },
  {
    name: 'RS 173 "Erling Skjalgsson"',
    rs: '173',
  },
  {
    name: 'RS 809 "Nicolai Jarlsby"',
    rs: '809',
  },
  {
    name: 'RS 905 "Frisk Bris"',
    rs: '905',
  },
  {
    name: 'RS 810 "Berge liv"',
    rs: '810',
  },
  {
    name: 'RS 950 "MMI"',
    rs: '950',
  },
  {
    name: 'RS 174 "Oscar Tybring V"',
    rs: '174',
  },
  {
    name: 'RS 903 "Frikken"',
    rs: '903',
  },
  {
    name: 'RS 811 "Inger Johanne"',
    rs: '811',
  },
];

const randdomVesselClassId = function (classes: Array<VesselClass>) {
  return classes[Math.floor(Math.random() * classes.length)];
};

const randdomStationId = function (stations: Array<Station>) {
  return stations[Math.floor(Math.random() * stations.length)];
};

const randdomCapabilityId = function (capabilities: Array<VesselCapability>) {
  return capabilities[Math.floor(Math.random() * capabilities.length)];
};

const randdomCapabilityArray = function (
  capabilities: Array<VesselCapability>,
) {
  const maxNumberOfCapability = Math.floor(Math.random() * capabilities.length);
  const capabilityArray: number[] = [];
  for (let i = 0; i < maxNumberOfCapability; i++) {
    if (!capabilityArray.includes(i))
      capabilityArray.push(randdomCapabilityId(capabilities).id);
  }
  return capabilityArray.map((capability) => ({ id: capability }));
};

export const seedVessels = async function (
  capabilities: Array<VesselCapability>,
  stations: Array<Station>,
  classes: Array<VesselClass>,
) {
  const vesselModels: Array<Vessel> = [];
  for (const vessel of vessels) {
    let vesselModel = await prisma.vessel.upsert({
      where: { name: vessel.name },
      update: {},
      create: {
        rs: +vessel.rs,
        name: vessel.name,
        classId: randdomVesselClassId(classes).id,
        stationId: randdomStationId(stations).id,
        stateId: 1,
        capabilities: {
          connect: randdomCapabilityArray(capabilities),
        },
      },
    });
    vesselModels.push(vesselModel);
  }
  return vesselModels;
};
