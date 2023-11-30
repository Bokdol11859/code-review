import { Issue } from '../model/issue';

export interface IssueRepository {
  getIssues(): Promise<Issue[]>;
  openIssues(ids: Brand<number, Issue>[]): Promise<void>;
  closeIssues(ids: Brand<number, Issue>[]): Promise<void>;
}
