import { inject, injectable } from 'inversify';
import { NewIssue } from '../../model/issue';
import type { IssueRepository } from '../../repository/issue-repository';
import { TYPES } from '../../../di/types';

export interface CreateIssueUseCase {
  invoke: (newIssue: NewIssue) => Promise<void>;
}

@injectable()
export class CreateIssue implements CreateIssueUseCase {
  private _issueRepo: IssueRepository;

  constructor(@inject(TYPES.IssueRepository) issueRepo: IssueRepository) {
    this._issueRepo = issueRepo;
  }

  async invoke(newIssue: NewIssue) {
    return this._issueRepo.createIssue(newIssue);
  }
}
