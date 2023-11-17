import { Issue } from '../model/issue';

export interface IssueRepository {
  getIssues(): Promise<Issue[]>;
}
