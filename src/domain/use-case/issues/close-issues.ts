import { inject, injectable } from 'inversify';
import { Issue } from '../../model/issue';
import type { IssueRepository } from '../../repository/issue-repository';
import { TYPES } from '../../../di/types';

export interface CloseIssuesUseCase {
  invoke: (ids: Issue['id'][]) => Promise<void>;
}

@injectable()
export class CloseIssues implements CloseIssuesUseCase {
  private _issueRepo: IssueRepository;

  constructor(@inject(TYPES.IssueRepository) issueRepo: IssueRepository) {
    this._issueRepo = issueRepo;
  }

  async invoke(ids: Issue['id'][]) {
    return this._issueRepo.closeIssues(ids);
  }
}
