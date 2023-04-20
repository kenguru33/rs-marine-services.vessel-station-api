import { Field,  Int, ObjectType } from '@nestjs/graphql';
import { VesselClassWithRelation } from './vessel-classes.service';
import { VesselModel } from 'src/vessels/vessel.model';

@ObjectType()
export class VesselClassModel implements VesselClassWithRelation {
  
  @Field(() => Int)
  id: VesselClassWithRelation[`id`];
  
  @Field(() => String)
  name: VesselClassWithRelation[`name`];
  
  @Field(() => Int)
  range: VesselClassWithRelation[`range`];
  
  @Field(() => Int)
  speed: VesselClassWithRelation[`speed`];
  
  @Field(() => [VesselModel])
  vessels: VesselClassWithRelation[`vessels`];
}
