import { Milestone } from '../../model/milestone';
import { MilestoneRepository } from '../../repository/milestone-repository';

export interface GetMilestonesUseCase {
  invoke: () => Promise<Milestone[]>;
}

export class GetMilestones implements GetMilestonesUseCase {
  private milestoneRepo: MilestoneRepository;
  constructor(_milestoneRepo: MilestoneRepository) {
    this.milestoneRepo = _milestoneRepo;
  }

  async invoke() {
    return this.milestoneRepo.getMilestones();
  }
}
