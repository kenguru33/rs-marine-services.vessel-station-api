import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dto/createStation.dto';
import { UpdateStationDto } from './dto/updateStation.dto';
import { StationsRepository } from './stations.repository';

@Injectable()
export class StationsService {
  constructor(private stationsRepository: StationsRepository) {}

  async station(id: number) {
    return this.stationsRepository.station(id);
  }
  async stations() {
    return this.stationsRepository.stations();
  }

  async createStation(data: CreateStationDto) {
    return this.stationsRepository.createStation(data);
  }

  async deleteStation(id: number) {
    return this.stationsRepository.deleteStation(id);
  }

  async updateStation(id: number, data: UpdateStationDto) {
    return this.stationsRepository.updateStation({ id, data });
  }
}
