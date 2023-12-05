import { Issue, IssueFilterOptions } from '../model/issue';

export interface IssueRepository {
  getIssues(filterOptions: IssueFilterOptions): Promise<Issue[]>;
  openIssues(ids: Brand<number, Issue>[]): Promise<void>;
  closeIssues(ids: Brand<number, Issue>[]): Promise<void>;
}
