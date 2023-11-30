import { Issue } from '../../domain/model/issue';

export default interface IssueDataSource {
  getIssues(): Promise<Issue[]>;
  openIssues(ids: Brand<number, Issue>[]): Promise<void>;
  closeIssues(ids: Brand<number, Issue>[]): Promise<void>;
}
