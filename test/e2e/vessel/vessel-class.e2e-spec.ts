import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { VesselModule } from '../../../src/modules/vessel/vessel.module';



describe('VesselClassController (e2e)', () => {
  let app: INestApplication;

  const mockVesselClass = {
    name: "e2e-test klassen",
    description: "Fartøysklasse",
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

  it('/vessel-class (POST)', async () => {
    return await request(app.getHttpServer())
      .post('/vessel-class')
      .set('Accept', 'application/json')
      .send(mockVesselClass)
      .expect(HttpStatus.CREATED)
      .expect((res) => {
        id = res.body.id;
        expect(res.body.name).toEqual(mockVesselClass.name);
        expect(res.body.description).toEqual(mockVesselClass.description);
      });
  });

  it(`/vessel-class?name=${mockVesselClass.name} (GET)`, async () => {
    return await request(app.getHttpServer())
      .get(`/vessel-class?name=${mockVesselClass.name}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveLength(1);
        expect(res.body[0].name).toEqual(mockVesselClass.name);
        expect(res.body[0].description).toEqual(mockVesselClass.description);
      });
  });

  it('/vessel-class/ (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/vessel-class/' + id)
      .expect(200)
      .expect({
        id,
        name: mockVesselClass.name,
        description: mockVesselClass.description,
      });
  });

  it('/vessel-class (PUT)', async () => {
    return await request(app.getHttpServer())
      .put('/vessel-class/' + id)
      .set('Accept', 'application/json')
      .send({
        name: mockVesselClass.name + ' - updated',
        description: mockVesselClass.description + ' - updated',
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.id).toEqual(id);
        expect(res.body.name).toEqual(mockVesselClass.name + ' - updated');
        expect(res.body.description).toEqual(
          mockVesselClass.description + ' - updated',
        );
      });
  });

  it('/vessel-class/{:id} (DELETE)', async () => {
    return await request(app.getHttpServer())
      .delete('/vessel-class/' + id)
      .expect(200)
      .expect((res) => {
        expect(res.body.id).toEqual(id);
        expect(res.body.name).toEqual(mockVesselClass.name + ' - updated');
        expect(res.body.description).toEqual(
          mockVesselClass.description + ' - updated',
        );
      });
  });
});
