import { Issue } from '../../domain/model/issue';
import { IssueRepository } from '../../domain/repository/issue-repository';
import IssueDataSource from '../data-source/issue-data-source';

export class IssueRepositoryImpl implements IssueRepository {
  constructor(private datasource: IssueDataSource) {}

  async getIssues() {
    return this.datasource.getIssues();
  }

  async openIssues(ids: Brand<number, Issue>[]) {
    return this.datasource.openIssues(ids);
  }

  async closeIssues(ids: Brand<number, Issue>[]): Promise<void> {
    return this.datasource.closeIssues(ids);
  }
}
