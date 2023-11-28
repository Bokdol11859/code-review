import { Issue } from '../../model/issue';
import { IssueRepository } from '../../repository/issue-repository';

export interface GetIssuesUseCase {
  invoke: () => Promise<Issue[]>;
}

export class GetIssues implements GetIssuesUseCase {
  private issueRepo: IssueRepository;
  constructor(_issueRepo: IssueRepository) {
    this.issueRepo = _issueRepo;
  }

  async invoke() {
    return this.issueRepo.getIssues();
  }
}
