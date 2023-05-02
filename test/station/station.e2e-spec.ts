import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { StationModule } from '../../src/station/station.module';
import { VesselModule } from '../../src/vessel/vessel.module';
import { PrismaService } from '../../src/database/prisma.service';

describe('StationController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, StationModule],
      // providers: [PrismaService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/station (POST)', async () => {
    const mockStation = {
      "name": "Heggedal",
      "typeId": 1,
      "address": "Kallekuveien 8",
      "postalCode": "1734",
      "postalLocation": "Skjærhalden",
      "latitude": 0,
      "longitude": 0
    }
    return await request(app.getHttpServer())
      .post('/station')
      .set("Accept", "application/json")
      .send(mockStation)
      .expect(HttpStatus.CREATED);
  });

  it('/station/1 (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/station/1')
      .expect(200)
      .expect({
        id: 1,
        name: 'Alta',
        tilFelt: null,
        address: 'co Geir Aslaksen, øvreveien 12',
        postalCode: '9515',
        postalLocation: 'Alta',
        postalBox: null,
        postalDelivery: 'Post leveres på kaien eller i Rema 1000 like ved',
        latitude: 69.979934,
        longitude: 23.305602,
        typeId: 1,
      });
  });
});
