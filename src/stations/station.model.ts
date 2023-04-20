import { Field,  Int, ObjectType } from '@nestjs/graphql';
import { VesselModel } from 'src/vessels/vessel.model';
import { StationWithRelation } from './stations.service';

@ObjectType()
export class StationModel implements StationWithRelation {
  
  @Field(() => Int)
  id: StationWithRelation[`id`];

  @Field(() => String)
  name: StationWithRelation[`name`];

  @Field(() => [VesselModel])
  vessels: StationWithRelation[`vessels`];
  
}
