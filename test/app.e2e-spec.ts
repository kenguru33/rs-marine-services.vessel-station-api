import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { StationModule } from '../src/station/station.module';
import { PrismaService } from '../src/database/prisma.service';
import { VesselModule } from '../src/vessel/vessel.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, StationModule, VesselModule],
      providers: [PrismaService],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/1 (GET)', async () => {
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
