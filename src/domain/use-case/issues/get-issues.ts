import { Issue, IssueFilterOptions } from '../../model/issue';
import { IssueRepository } from '../../repository/issue-repository';

export interface GetIssuesUseCase {
  invoke: (filterOptions: IssueFilterOptions) => Promise<Issue[]>;
}

export class GetIssues implements GetIssuesUseCase {
  private issueRepo: IssueRepository;
  constructor(_issueRepo: IssueRepository) {
    this.issueRepo = _issueRepo;
  }

  async invoke(filterOptions: IssueFilterOptions) {
    return this.issueRepo.getIssues(filterOptions);
  }
}
