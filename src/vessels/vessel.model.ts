import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Station, VesselCapability, VesselState, VesselSubState } from '@prisma/client';
import { VesselWithRelation } from './vessels.service';
import { VesselClassModel } from 'src/vessel-classes/vesselClass.model';

@ObjectType()
export class VesselModel implements VesselWithRelation {
  
  station: Station;
  

  @Field(() => Int)
  id: VesselWithRelation[`id`];

  @Field(() => Int)
  rs: VesselWithRelation[`rs`];

  @Field(() => String)
  name: VesselWithRelation[`name`];

  @Field(() =>Int)
  stationId: number;

  @Field(() => Int)
  classId: number;

  @Field(() => Int)
  subStateId: number;

  @Field(() => VesselClassModel)
  class: VesselWithRelation[`class`];

  
  capabilities: VesselCapability[];

  subState: VesselSubState & { parentState: VesselState; };
}
