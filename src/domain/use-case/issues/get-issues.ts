import { Issue, IssueFilterOptions } from '../../model/issue';
import { IssueRepository } from '../../repository/issue-repository';

export interface GetIssuesUseCase {
  invoke: (
    filterOptions: IssueFilterOptions
  ) => Promise<{
    data: Issue[];
    openIssueCount: number | null;
    closeIssueCount: number | null;
  }>;
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
