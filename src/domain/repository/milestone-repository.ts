import { Milestone } from '../model/milestone';

export interface MilestoneRepository {
  getMilestones(): Promise<Milestone[]>;
}
