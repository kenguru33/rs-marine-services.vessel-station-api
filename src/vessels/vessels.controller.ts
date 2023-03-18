import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVesselDto } from './dto/createVessel.dto';
import { UpdateVesselDto } from './dto/updateVessel.dto';
import { VesselsService } from './vessels.service';

@Controller('vessels')
export class VesselsController {
  constructor(private vesselsService: VesselsService) {}

  @Get(':id')
  vessel(@Param('id', ParseIntPipe) id: number) {
    return this.vesselsService.vessel(id);
  }

  @Get()
  vessels() {
    return this.vesselsService.vessels();
  }

  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  createVessel(@Body() data: CreateVesselDto) {
    return this.vesselsService.createVessel(data);
  }

  @Put(':id/update')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateVessel(@Body() data: UpdateVesselDto, @Param('id') id: number) {
    return this.vesselsService.updateVessel(id, data);
  }

  // createVessel(@Body() data: CreateVesselDto) {
  //   const { name, rs, capabilityIds, vesselClassId } = data;
  //   return this.vesselsService.createVessel({
  //     name,
  //     rs,
  //     vesselClass: { connect: { id: vesselClassId } },
  //     capabilities: { connect: capabilityIds.map((id) => ({ id })) },
  //   });
  //  }

  // @Put(':id/add-capability')
  // @UsePipes(new ValidationPipe({ transform: true }))
  // addCapability(
  //   @Param('id') id: number,
  //   @Body() data: { capabilityId: number },
  // ) {
  //   const { capabilityId } = data;
  //   return this.vesselsService.addCapability({ vesselId: id, capabilityId });
  // }

  // @Put(':id/remove-capability')
  // @UsePipes(new ValidationPipe({ transform: true }))
  // removeCapability(
  //   @Param('id') id: number,
  //   @Body() data: { capabilityId: number },
  // ) {
  //   const { capabilityId } = data;
  //   return this.vesselsService.removeCapability({ vesselId: id, capabilityId });
  // }
}
