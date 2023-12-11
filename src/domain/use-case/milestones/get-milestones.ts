import { inject, injectable } from 'inversify';
import { Milestone } from '../../model/milestone';
import type { MilestoneRepository } from '../../repository/milestone-repository';
import { TYPES } from '../../../di/types';

export interface GetMilestonesUseCase {
  invoke: () => Promise<Milestone[]>;
}

@injectable()
export class GetMilestones implements GetMilestonesUseCase {
  private _milestoneRepo: MilestoneRepository;
  constructor(
    @inject(TYPES.MilestoneRepository) milestoneRepo: MilestoneRepository
  ) {
    this._milestoneRepo = milestoneRepo;
  }

  async invoke() {
    return this._milestoneRepo.getMilestones();
  }
}
