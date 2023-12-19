import { inject, injectable } from 'inversify';
import { Issue } from '../../model/issue';
import type {
  IssueDetail,
  IssueRepository,
} from '../../repository/issue-repository';
import { TYPES } from '../../../di/types';

export interface GetIssueUseCase {
  invoke: (id: Issue['id']) => Promise<IssueDetail>;
}

@injectable()
export class GetIssue implements GetIssueUseCase {
  private _issueRepo: IssueRepository;

  constructor(@inject(TYPES.IssueRepository) issueRepo: IssueRepository) {
    this._issueRepo = issueRepo;
  }

  async invoke(id: Issue['id']) {
    return this._issueRepo.getIssue(id);
  }
}
