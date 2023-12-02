import { Milestone } from '../../domain/model/milestone';
import { MilestoneRepository } from '../../domain/repository/milestone-repository';
import { MilestoneAPIEntity } from '../data-source/api/entity/milestone-api-entity';
import MilestoneDataSource from '../data-source/milestone-data-source';

export class MilestoneRepositoryImpl implements MilestoneRepository {
  constructor(private datasource: MilestoneDataSource) {}

  async getMilestones() {
    const data = await this.datasource.getLabels();

    return this.mapEntityToModel(data);
  }

  private mapEntityToModel(data: MilestoneAPIEntity[]): Milestone[] {
    return data.map(
      ({ id, title, description, created_at, due_date, is_open }) => {
        return {
          id,
          title,
          description: description,
          dueDate: due_date ? new Date(due_date) : null,
          isOpen: is_open,
          createdAt: new Date(created_at),
        };
      }
    );
  }
}
