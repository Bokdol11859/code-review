import { Issue } from '../../domain/model/issue';

export default interface IssueDataSource {
  getIssues(): Promise<Issue[]>;
}
