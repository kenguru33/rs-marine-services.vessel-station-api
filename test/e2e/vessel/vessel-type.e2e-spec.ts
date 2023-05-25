import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { VesselModule } from '../../../src/modules/vessel/vessel.module';
import { AppModule } from '../../../src/app.module';
import { faker } from '@faker-js/faker';

describe('VesselTypeController (e2e)', () => {
  let app: INestApplication;

  const mockVesselType = {
    name: faker.vehicle.type(),
    description: faker.lorem.words(5),
    prefix: 'RS',
  };

  let id: number;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, VesselModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/vessel-type (POST)', async () => {
    return await request(app.getHttpServer())
      .post('/vessel-type')
      .set('Accept', 'application/json')
      .send(mockVesselType)
      .expect(HttpStatus.CREATED)
      .expect((res) => {
        id = res.body.id;
        expect(res.body.name).toEqual(mockVesselType.name);
        expect(res.body.description).toEqual(mockVesselType.description);
        expect(res.body.prefix).toEqual(mockVesselType.prefix);
      });
  });

  it(`/vessel-type?name=${mockVesselType.name} (GET)`, async () => {
    return await request(app.getHttpServer())
      .get(`/vessel-type?name=${mockVesselType.name}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveLength(1);
        expect(res.body[0].name).toEqual(mockVesselType.name);
        expect(res.body[0].description).toEqual(mockVesselType.description);
        expect(res.body[0].prefix).toEqual(mockVesselType.prefix);
      });
  });

  it('/vessel-type/ (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/vessel-type/' + id)
      .expect(200)
      .expect({
        id,
        name: mockVesselType.name,
        description: mockVesselType.description,
        prefix: mockVesselType.prefix,
      });
  });

  it('/vessel-type (PUT)', async () => {
    return await request(app.getHttpServer())
      .put('/vessel-type/' + id)
      .set('Accept', 'application/json')
      .send({
        name: mockVesselType.name + ' - updated',
        description: mockVesselType.description + ' - updated',
        prefix: mockVesselType.prefix + ' - updated',
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.id).toEqual(id);
        expect(res.body.name).toEqual(mockVesselType.name + ' - updated');
        expect(res.body.description).toEqual(
          mockVesselType.description + ' - updated',
        );
        expect(res.body.prefix).toEqual(mockVesselType.prefix + ' - updated');
      });
  });

  it('/vessel-type/{:id} (DELETE)', async () => {
    return await request(app.getHttpServer())
      .delete('/vessel-type/' + id)
      .expect(200)
      .expect((res) => {
        expect(res.body.id).toEqual(id);
        expect(res.body.name).toEqual(mockVesselType.name + ' - updated');
        expect(res.body.description).toEqual(
          mockVesselType.description + ' - updated',
        );
        expect(res.body.prefix).toEqual(mockVesselType.prefix + ' - updated');
      });
  });
});
