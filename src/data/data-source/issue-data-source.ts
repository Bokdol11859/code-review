import { Issue } from '../../domain/model/issue';
import { IssueAPIEntity } from './api/entity/issue-api-entity';

export default interface IssueDataSource {
  getIssues(): Promise<IssueAPIEntity[]>;
  openIssues(ids: Brand<number, Issue>[]): Promise<void>;
  closeIssues(ids: Brand<number, Issue>[]): Promise<void>;
}
