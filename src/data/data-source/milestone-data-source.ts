import { MilestoneAPIEntity } from '../entity/milestone-api-entity';

export default interface MilestoneDataSource {
  getLabels(): Promise<MilestoneAPIEntity[]>;
}
