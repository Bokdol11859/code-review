import { MilestoneAPIEntity } from './api/entity/milestone-api-entity';

export default interface MilestoneDataSource {
  getLabels(): Promise<MilestoneAPIEntity[]>;
}
