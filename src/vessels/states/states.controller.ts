import { Controller, Get } from '@nestjs/common';
import { StatesService } from './states.service';

@Controller('vessels/states')
export class StatesController {
  constructor(private statesService: StatesService) {}
  @Get()
  async getStates() {
    return this.statesService.states();
  }
}
