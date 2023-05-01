import { Test, TestingModule } from '@nestjs/testing';
import { StationService } from '../station.service';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { Prisma, PrismaClient, Station } from '@prisma/client';
import { CreateStationDto } from '../dto/create-station.dto';
import { PrismaService } from '../../database/prisma.service';

describe('StationsService', () => {
  let stationService: StationService;
  let prismaService: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [StationService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    prismaService = moduleRef.get(PrismaService);
    stationService = moduleRef.get(StationService);
  });

  it(`should create a new station`, async () => {
    const mockedStation: Station = {
      id: 1,
      address: 'testveien 1',
      latitude: 0,
      longitude: 0,
      name: 'test station',
      postalCode: '1372',
      postalLocation: 'test',
      typeId: 1,
      postalBox: 1,
      postalDelivery: '',
      tilFelt: '',
    };

    prismaService.station.create.mockResolvedValue(mockedStation);

    const createStation = () =>
      stationService.createStation({
        address: 'testveien 1',
        latitude: 0,
        longitude: 0,
        name: 'test station',
        postalCode: '1372',
        postalLocation: 'test',
        typeId: 1,
        postalBox: 1,
        tilFelt: '',
      });

    await expect(createStation()).resolves.toBe(mockedStation);
  });
  it('should return station with id 1', async () => {
    const mockedStation: Station = {
      id: 1,
      address: 'testveien 1',
      latitude: 0,
      longitude: 0,
      name: 'test station',
      postalCode: '1372',
      postalLocation: 'test',
      typeId: 1,
      postalBox: 1,
      postalDelivery: '',
      tilFelt: '',
    };

    prismaService.station.findFirstOrThrow.mockResolvedValue(mockedStation);

    const getStation = () => stationService.getStation(1)
    await expect(getStation).resolves.toBe(mockedStation);
  });
});
