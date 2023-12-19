import { inject, injectable } from 'inversify';

import type {
  IssueCreationData,
  IssueRepository,
} from '../../repository/issue-repository';
import { TYPES } from '../../../di/types';

export interface CreateIssueUseCase {
  invoke: (newIssue: IssueCreationData) => Promise<void>;
}

@injectable()
export class CreateIssue implements CreateIssueUseCase {
  private _issueRepo: IssueRepository;

  constructor(@inject(TYPES.IssueRepository) issueRepo: IssueRepository) {
    this._issueRepo = issueRepo;
  }

  async invoke(newIssue: IssueCreationData) {
    return this._issueRepo.createIssue(newIssue);
  }
}
