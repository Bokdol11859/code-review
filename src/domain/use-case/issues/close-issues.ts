import { Issue } from '../../model/issue';
import { IssueRepository } from '../../repository/issue-repository';

export interface CloseIssuesUseCase {
  invoke: (ids: Brand<number, Issue>[]) => void;
}

export class CloseIssues implements CloseIssuesUseCase {
  private issueRepo: IssueRepository;
  constructor(_issueRepo: IssueRepository) {
    this.issueRepo = _issueRepo;
  }

  async invoke(ids: Brand<number, Issue>[]) {
    return this.issueRepo.closeIssues(ids);
  }
}
