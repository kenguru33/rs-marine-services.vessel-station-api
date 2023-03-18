import { Injectable } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { CreateStateDto } from './dto/createState.dto';

@Injectable()
export class StatesService {
  constructor(private repo: RepositoryService) {}

  async state(id: number) {
    return this.repo.state({ id });
  }

  async states() {
    return this.repo.states({});
  }

  async createState(data: CreateStateDto) {
    return this.repo.createState(data);
  }

  async deleteState(id: number) {
    return this.repo.deleteState({ id });
  }

  async updateState(id: number, data: {
    name?: string;
    description?: string;
    inUse?: boolean;
  }) {
    return this.repo.updateState({ id, data });
  }

}
