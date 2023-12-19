import { inject, injectable } from 'inversify';
import { Issue } from '../../model/issue';
import type { IssueRepository } from '../../repository/issue-repository';
import { TYPES } from '../../../di/types';

export interface OpenIssuesUseCase {
  invoke: (ids: Issue['id'][]) => Promise<void>;
}

@injectable()
export class OpenIssues implements OpenIssuesUseCase {
  private _issueRepo: IssueRepository;

  constructor(@inject(TYPES.IssueRepository) issueRepo: IssueRepository) {
    this._issueRepo = issueRepo;
  }

  async invoke(ids: Issue['id'][]) {
    return this._issueRepo.openIssues(ids);
  }
}
