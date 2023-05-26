import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { VesselModule } from '../../../src/modules/vessel/vessel.module';
import { VesselCommunicationEquipmentModule } from '../../../src/modules/vessel/modules/vessel-communication-equipment/vessel-communication-equipment.module';

describe('VesselClassController (e2e)', () => {
  let app: INestApplication;

  const mockVesselCommunicationEquipmentType = {
    name: 'e2e-test Comm Equip',
    description: 'Test Kommunikasjonsutstyr',
  };

  let id: number;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, VesselCommunicationEquipmentModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/vessel-communication-equipment-type (POST)', async () => {
    return await request(app.getHttpServer())
      .post('/vessel-communication-equipment-type')
      .set('Accept', 'application/json')
      .send(mockVesselCommunicationEquipmentType)
      .expect(HttpStatus.CREATED)
      .expect((res) => {
        id = res.body.id;
        expect(res.body.name).toEqual(
          mockVesselCommunicationEquipmentType.name,
        );
        expect(res.body.description).toEqual(
          mockVesselCommunicationEquipmentType.description,
        );
      });
  });

  xit(`/vessel-communication-equipment-type?name=${mockVesselCommunicationEquipmentType.name} (GET)`, async () => {
    return await request(app.getHttpServer())
      .get(
        `/vessel-communication-equipment-type?name=${mockVesselCommunicationEquipmentType.name}`,
      )
      .expect(HttpStatus.OK)
      .expect((res) => {
        expect(res.body).toHaveLength(1);
        expect(res.body[0].name).toEqual(
          mockVesselCommunicationEquipmentType.name,
        );
        expect(res.body[0].description).toEqual(
          mockVesselCommunicationEquipmentType.description,
        );
      });
  });

  it('/vessel-communication-equipment-type (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/vessel-communication-equipment-type/' + id)
      .expect(200)
      .expect({
        id,
        name: mockVesselCommunicationEquipmentType.name,
        description: mockVesselCommunicationEquipmentType.description,
      });
  });

  it('/vessel-communication-equipment-type (PUT)', async () => {
    return await request(app.getHttpServer())
      .put('/vessel-communication-equipment-type/' + id)
      .set('Accept', 'application/json')
      .send({
        name: mockVesselCommunicationEquipmentType.name + ' - updated',
        description:
          mockVesselCommunicationEquipmentType.description + ' - updated',
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.id).toEqual(id);
        expect(res.body.name).toEqual(
          mockVesselCommunicationEquipmentType.name + ' - updated',
        );
        expect(res.body.description).toEqual(
          mockVesselCommunicationEquipmentType.description + ' - updated',
        );
      });
  });

  it('/vessel-communication-equipment-type/{:id} (DELETE)', async () => {
    return await request(app.getHttpServer())
      .delete('/vessel-communication-equipment-type/' + id)
      .expect(HttpStatus.OK)
      .expect((res) => {
        expect(res.body.id).toEqual(id);
        expect(res.body.name).toEqual(
          mockVesselCommunicationEquipmentType.name + ' - updated',
        );
        expect(res.body.description).toEqual(
          mockVesselCommunicationEquipmentType.description + ' - updated',
        );
      });
  });
});
