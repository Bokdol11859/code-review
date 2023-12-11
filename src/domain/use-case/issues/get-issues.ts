import { inject, injectable } from 'inversify';
import { Issue, IssueFilterOptions } from '../../model/issue';
import type { IssueRepository } from '../../repository/issue-repository';
import { TYPES } from '../../../di/types';

export interface GetIssuesUseCase {
  invoke: (filterOptions: IssueFilterOptions) => Promise<{
    data: Issue[];
    openIssueCount: number | null;
    closeIssueCount: number | null;
  }>;
}

@injectable()
export class GetIssues implements GetIssuesUseCase {
  private _issueRepo: IssueRepository;

  constructor(@inject(TYPES.IssueRepository) issueRepo: IssueRepository) {
    this._issueRepo = issueRepo;
  }

  async invoke(filterOptions: IssueFilterOptions) {
    return this._issueRepo.getIssues(filterOptions);
  }
}
