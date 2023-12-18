import { Milestone } from '../model/milestone';

export interface Milestones {
  data: Milestone[];
}

export interface MilestoneRepository {
  getMilestones(): Promise<Milestones>;
}
