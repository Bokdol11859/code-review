import { Issue, IssueFilterOptions, NewIssue } from '../../domain/model/issue';
import { IssueAPIEntity } from './api/entity/issue-api-entity';

export default interface IssueDataSource {
  getIssues(filterOptions: IssueFilterOptions): Promise<IssueAPIEntity>;
  openIssues(ids: Brand<number, Issue>[]): Promise<void>;
  closeIssues(ids: Brand<number, Issue>[]): Promise<void>;
  createIssue(newIssue: NewIssue): Promise<void>;
}
