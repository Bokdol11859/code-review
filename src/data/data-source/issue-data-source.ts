import { Issue } from '../../domain/model/issue';
import {
  IssueCreationData,
  IssueFilterOptions,
} from '../../domain/repository/issue-repository';
import { IssueAPIEntity } from './api/entity/issue-api-entity';

export default interface IssueDataSource {
  getIssues(filterOptions: IssueFilterOptions): Promise<IssueAPIEntity>;
  openIssues(ids: Issue['id'][]): Promise<void>;
  closeIssues(ids: Issue['id'][]): Promise<void>;
  createIssue(newIssue: IssueCreationData): Promise<void>;
}
