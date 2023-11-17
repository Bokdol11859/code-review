import { IssueRepository } from '../../domain/repository/issue-repository';
import IssueDataSource from '../data-source/issue-data-source';

export class IssueRepositoryImpl implements IssueRepository {
  constructor(private datasource: IssueDataSource) {}

  async getIssues() {
    return this.datasource.getIssues();
  }
}
