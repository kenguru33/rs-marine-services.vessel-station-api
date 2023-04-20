import { Field,  Int, ObjectType } from '@nestjs/graphql';
import { VesselModel } from 'src/vessels/vessel.model';
import { VesselCapabilityWithRelation } from './vessel-capabilities.service';
import { Vessel } from '@prisma/client';

@ObjectType()
export class VesselCapabilityModel implements VesselCapabilityWithRelation {
  
  @Field(() => Int)
  id: VesselCapabilityWithRelation[`id`];
  
  @Field(() => String)
  name: VesselCapabilityWithRelation[`name`];

  @Field(() => [VesselModel])
  vessels: VesselCapabilityWithRelation[`vessels`];
  
  @Field(() => String)
  description: string;
}
