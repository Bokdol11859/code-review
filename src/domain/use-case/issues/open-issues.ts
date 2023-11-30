import { Issue } from '../../model/issue';
import { IssueRepository } from '../../repository/issue-repository';

export interface OpenIssuesUseCase {
  invoke: (ids: Brand<number, Issue>[]) => void;
}

export class OpenIssues implements OpenIssuesUseCase {
  private issueRepo: IssueRepository;
  constructor(_issueRepo: IssueRepository) {
    this.issueRepo = _issueRepo;
  }

  async invoke(ids: Brand<number, Issue>[]) {
    return this.issueRepo.openIssues(ids);
  }
}
