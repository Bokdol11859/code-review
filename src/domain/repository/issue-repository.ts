import { Issue, IssueFilterOptions, NewIssue } from '../model/issue';

export interface IssueRepository {
  getIssues(filterOptions: IssueFilterOptions): Promise<{
    data: Issue[];
    openIssueCount: number;
    closeIssueCount: number;
  }>;
  openIssues(ids: Brand<number, Issue>[]): Promise<void>;
  closeIssues(ids: Brand<number, Issue>[]): Promise<void>;
  createIssue(newIssue: NewIssue): Promise<void>;
}
