import { inject, injectable } from 'inversify';
import type {
  MilestoneRepository,
  Milestones,
} from '../../repository/milestone-repository';
import { TYPES } from '../../../di/types';

export interface GetMilestonesUseCase {
  invoke: () => Promise<Milestones>;
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
