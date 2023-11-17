import { Issue } from '../../model/issue';
import { IssueRepository } from '../../repository/issue-repository';

export interface GetIssuesUseCase {
  invoke: () => Promise<Issue[]>;
}

export class GetIssues implements GetIssuesUseCase {
  private todoRepo: IssueRepository;
  constructor(_todoRepo: IssueRepository) {
    this.todoRepo = _todoRepo;
  }

  async invoke() {
    return this.todoRepo.getIssues();
  }
}
