import { Controller, Get, Post } from '@nestjs/common';
import { StatesService } from './states.service';

@Controller('vessels/states')
export class StatesController {
  constructor(private statesService: StatesService) {}
  
  @Get()
  async states() {
    console.log('states')
    return this.statesService.states();
  }

  @Post('create')
  async createState() {
    return this.statesService.createState({
      name: 'test',
      description: 'test',
      inUse: true,
    });
  }
  


}
