import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { VesselInspectorService } from './vessel-inspector.service';
import { CreateVesselInspectorDto } from './dto/create-vessel-inspector.dto';
import { UpdateVesselInspectorDto } from './dto/update-vessel-inspector.dto';

@Controller('vessel-inspector')
export class VesselInspectorController {
  constructor(private vessselInspectorService: VesselInspectorService) {}

  @Get(':id')
  async getVesselInspector(@Param('id', ParseIntPipe) id: number) {
    return await this.vessselInspectorService.getVesselInspector(id);
  }

  @Get()
  async getVesselInspectors() {
    return await this.vessselInspectorService.getVesselInspectors();
  }

  @Post()
  async createVesselInspector(@Body() data: CreateVesselInspectorDto) {
    console.log('inspector-post', data);
    return await this.vessselInspectorService.createVesselInspector(data);
  }

  @Put(':id')
  async updateVesselInspector(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateVesselInspectorDto,
  ) {
    console.log('inspector-update', data);
    return await this.vessselInspectorService.updateVesselInspector(id, data);
  }

  @Delete(':id')
  async deleteVesselInspector(@Param('id', ParseIntPipe) id: number) {
    return await this.vessselInspectorService.deleteVesselInspector(id);
  }
}
