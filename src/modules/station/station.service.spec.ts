import { Test, TestingModule } from '@nestjs/testing';
import { StationService } from './station.service';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaClient, Station } from '@prisma/client';
import { CreateStationDto } from './dto/create-station.dto';
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
    const mockedStation = {
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

    prismaService.station.findUniqueOrThrow.mockResolvedValue(mockedStation);

    const getStation = (id: number) => stationService.getStation(id);

    await expect(getStation(1)).resolves.toBe(mockedStation);
  });

  it('should return all stations', async () => {
    const mockedStation: Station[] = [
      {
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
      },
    ];
    prismaService.station.findMany.mockResolvedValue(mockedStation);
    const getStations = () => stationService.getStations({});
    await expect(getStations()).resolves.toBe(mockedStation);
  });

  it('should delete station with id 1', async () => {
    const mockedStation = {
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

    prismaService.station.delete.mockResolvedValue(mockedStation);

    const deleteStation = (id: number) => stationService.deleteStation(id);

    await expect(deleteStation(1)).resolves.toBe(mockedStation);
  });

  it('should update station with id 1', async () => {
    const mockedUpdatedStation = {
      id: 1,
      address: 'updated testveien 2',
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

    prismaService.station.update.mockResolvedValue(mockedUpdatedStation);

    const updateStation = (id: number, data: CreateStationDto) =>
      stationService.updateStation(id, data);

    await expect(
      updateStation(1, {
        address: 'updated testveien 2',
        latitude: 0,
        longitude: 0,
        name: 'test station',
        postalCode: '1374',
        postalLocation: 'test',
        typeId: 1,
        postalBox: 1,
      }),
    ).resolves.toHaveProperty('address', 'updated testveien 2');
  });
});
